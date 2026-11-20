import { NextResponse } from "next/server";

interface InvoiceData {
  invoiceNo: string;
  receiptNo: string;
  date: string;
  clientName: string;
  totalAmount: number;
  createdAt: string;
  details?: Record<string, unknown>;
}

/**
 * @function getBlobStore
 * @description Helper to connect to Netlify Blobs using environment variables if present
 */
async function getBlobStore() {
  const { getStore } = await import("@netlify/blobs");
  const siteID = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_AUTH_TOKEN;

  if (siteID && token) {
    return getStore({
      name: "blagro-invoices",
      siteID,
      token,
    });
  }

  return getStore({ name: "blagro-invoices" });
}

// GET: returns the next invoice number and receipt number
export async function GET() {
  try {
    let invoices: InvoiceData[] = [];
    let nextCounter = 56; // default starting counter after template 0055

    try {
      const store = await getBlobStore();
      const rawCounter = await store.get("counter", { type: "text" });
      const rawInvoices = await store.get("invoice_list", { type: "text" });

      if (rawCounter) {
        nextCounter = parseInt(String(rawCounter), 10) || 56;
      }
      if (rawInvoices) {
        invoices = JSON.parse(String(rawInvoices));
      }
    } catch {
      // Blobs unavailable in local environment or not configured yet
      console.log("Blobs are not available in local environment");
    }

    const pad = (n: number) => String(n).padStart(4, "0");
    return NextResponse.json({
      success: true,
      nextInvoiceNo: `INV-${pad(nextCounter)}`,
      nextReceiptNo: `REC-${pad(nextCounter)}`,
      counter: nextCounter,
      invoices,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch counter";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}

// POST: saves the invoice and increments the counter
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { invoiceNo, receiptNo, clientName, totalAmount, details } = body;

    let savedWithBlobs = false;
    let nextCounter = 56;

    try {
      const store = await getBlobStore();
      const currentCounterStr = await store.get("counter", { type: "text" });
      const currentCounter = currentCounterStr
        ? parseInt(String(currentCounterStr), 10)
        : 55;
      nextCounter = currentCounter + 1;

      await store.set("counter", String(nextCounter));

      const rawInvoices = await store.get("invoice_list", { type: "text" });
      const invoices: InvoiceData[] = rawInvoices
        ? JSON.parse(String(rawInvoices))
        : [];

      const newRecord: InvoiceData = {
        invoiceNo: invoiceNo || `INV-${String(nextCounter).padStart(4, "0")}`,
        receiptNo: receiptNo || `REC-${String(nextCounter).padStart(4, "0")}`,
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        clientName: clientName || "Customer",
        totalAmount: totalAmount || 0,
        createdAt: new Date().toISOString(),
        details,
      };

      invoices.unshift(newRecord);
      await store.set("invoice_list", JSON.stringify(invoices.slice(0, 100)));
      savedWithBlobs = true;
    } catch {
      // Fallback in case of local offline dev
    }

    return NextResponse.json({
      success: true,
      savedWithBlobs,
      savedInvoice: {
        invoiceNo,
        receiptNo,
        clientName,
        totalAmount,
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to save invoice";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
