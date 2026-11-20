"use client";

import { useState, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { numberToNairaWords } from "@/lib/numberToWords";
import {
  PaymentStatus,
  ItemType,
  InvoiceFormState,
  InvoiceRecord,
} from "@/types/invoice";
import { InvoiceForm } from "@/components/invoice/InvoiceForm";
import { InvoicePageOne } from "@/components/invoice/InvoicePageOne";
import { InvoicePageTwo } from "@/components/invoice/InvoicePageTwo";
import { ThemeToggle } from "@/components/ThemeToggle";

const initialFormState: InvoiceFormState = {
  invoiceNo: "",
  receiptNo: "",
  issueDate: "",
  paymentStatus: PaymentStatus.PaidInFull,
  paymentMethod: "",
  clientName: "",
  clientAddress: "",
  clientPhone: "",
  clientEmail: "",
  items: [
    {
      id: "item_init_1",
      itemType: ItemType.Vehicle,
      itemTitle: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleColour: "",
      chassisNo: "",
      vregCertNo: "",
      unitPrice: 0,
      quantity: 1,
    },
  ],
  discount: 0,
  amountPaid: 0,
  selectedSignature: "/assets/signatures/signature1.png",
  customSignature: null,
};

export default function InvoicePage() {
  const [form, setForm] = useState<InvoiceFormState>(initialFormState);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [recentInvoices, setRecentInvoices] = useState<InvoiceRecord[]>([]);
  const [isMobileConsoleOpen, setIsMobileConsoleOpen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Financial Calculations
  const subtotal = form.items.reduce(
    (sum, item) => sum + (item.unitPrice || 0) * (item.quantity || 1),
    0,
  );
  const calculatedTotal = Math.max(0, subtotal - (form.discount || 0));
  const balanceOutstanding = Math.max(
    0,
    calculatedTotal - (form.amountPaid || 0),
  );
  const amountInWords = numberToNairaWords(calculatedTotal);
  const amountPaidInWords = numberToNairaWords(form.amountPaid || 0);

  // Synchronize Counter and Today's Date
  useEffect(() => {
    async function loadDefaults() {
      const today = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      try {
        const res = await fetch("/api/invoices");
        const data = await res.json();

        let invNo = data.nextInvoiceNo || "INV-0056";
        let recNo = data.nextReceiptNo || "REC-0056";

        const localCounter = localStorage.getItem("blagro_invoice_counter");
        if (localCounter) {
          const count = parseInt(localCounter, 10);
          const pad = (n: number) => String(n).padStart(4, "0");
          invNo = `INV-${pad(count)}`;
          recNo = `REC-${pad(count)}`;
        }

        setForm((prev) => ({
          ...prev,
          invoiceNo: invNo,
          receiptNo: recNo,
          issueDate: today,
          paymentMethod: "Confirmed Bank Settlement",
        }));

        if (data.invoices?.length) {
          setRecentInvoices(data.invoices);
        } else {
          const stored = localStorage.getItem("blagro_recent_invoices");
          if (stored) setRecentInvoices(JSON.parse(stored));
        }
      } catch {
        const localCounter =
          localStorage.getItem("blagro_invoice_counter") || "56";
        const count = parseInt(localCounter, 10);
        const pad = (n: number) => String(n).padStart(4, "0");
        setForm((prev) => ({
          ...prev,
          invoiceNo: `INV-${pad(count)}`,
          receiptNo: `REC-${pad(count)}`,
          issueDate: today,
          paymentMethod: "Confirmed Bank Settlement",
        }));
      }
    }

    loadDefaults();
  }, []);

  const handleFieldChange = <K extends keyof InvoiceFormState>(
    key: K,
    value: InvoiceFormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Exact 2-Page Vector A4 PDF Export (No blank pages, clean pagination)
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    try {
      await saveInvoiceRecord();

      const page1El = document.getElementById("invoice-page-1");
      const page2El = document.getElementById("invoice-page-2");

      if (!page1El || !page2El) {
        throw new Error("Invoice pages not found");
      }

      const cleanClient = (form.clientName || "Customer").replace(
        /[^a-zA-Z0-9]/g,
        "_",
      );
      const filename = `${form.invoiceNo || "INV"}_${cleanClient}.pdf`;

      // Render Page 1 to high-resolution canvas
      const canvas1 = await html2canvas(page1El, {
        scale: 2,
        useCORS: true,
        scrollY: 0,
        backgroundColor: "#ffffff",
        logging: false,
      });

      // Render Page 2 to high-resolution canvas
      const canvas2 = await html2canvas(page2El, {
        scale: 2,
        useCORS: true,
        scrollY: 0,
        backgroundColor: "#ffffff",
        logging: false,
      });

      // Create exact A4 portrait PDF document (210mm x 297mm)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const imgData1 = canvas1.toDataURL("image/jpeg", 0.98);
      pdf.addImage(imgData1, "JPEG", 0, 0, 210, 297, undefined, "FAST");

      pdf.addPage("a4", "portrait");

      const imgData2 = canvas2.toDataURL("image/jpeg", 0.98);
      pdf.addImage(imgData2, "JPEG", 0, 0, 210, 297, undefined, "FAST");

      pdf.save(filename);
    } catch (err) {
      console.error("PDF generation error:", err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const saveInvoiceRecord = async () => {
    try {
      const payload: InvoiceRecord = {
        invoiceNo: form.invoiceNo || "INV-0001",
        receiptNo: form.receiptNo || "REC-0001",
        clientName: form.clientName || "Customer",
        totalAmount: calculatedTotal,
        date: form.issueDate,
        details: {
          items: form.items,
          amountPaid: form.amountPaid,
          balanceOutstanding,
        },
      };

      await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const numMatch = form.invoiceNo.match(/\d+/);
      const nextNum = numMatch ? parseInt(numMatch[0], 10) + 1 : 56;
      localStorage.setItem("blagro_invoice_counter", String(nextNum));

      const updated = [payload, ...recentInvoices.slice(0, 9)];
      setRecentInvoices(updated);
      localStorage.setItem("blagro_recent_invoices", JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving record:", e);
    }
  };

  const activeSignature =
    form.selectedSignature === "custom" && form.customSignature
      ? form.customSignature
      : form.selectedSignature;

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200">
      {/* Top Action Bar */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-40 px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center shadow-sm no_print transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-emerald-200">
              BL
            </div>
            <h1 className="font-black text-zinc-900 dark:text-white tracking-tight text-sm sm:text-base">
              Invoice &amp; Receipt Generator
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3 sm:mt-0">
          <ThemeToggle />
          <button
            onClick={() => window.print()}
            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 transition"
          >
            <i className="fas fa-print"></i> Print
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPdf}
            className="bg-brand-primary hover:bg-brand-primary_hover text-white font-bold px-5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-md shadow-emerald-700/20 transition disabled:opacity-50"
          >
            {isGeneratingPdf ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Generating PDF...
              </>
            ) : (
              <>
                <i className="fas fa-file-pdf"></i> Download Vector A4 PDF
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="container mx-auto md:px-4 px-2 py-6 sm:py-8 max-w-7xl">
        {/* Mobile Input Console Floating Trigger */}
        <div className="lg:hidden mb-4 no_print flex items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div>
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block">
              Active Form
            </span>
            <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              {form.invoiceNo || "INV-0056"} &bull;{" "}
              {form.clientName || "Customer"}
            </p>
          </div>
          <button
            onClick={() => setIsMobileConsoleOpen(true)}
            className="bg-brand-primary hover:bg-brand-primary_hover text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm transition"
          >
            <i className="fas fa-sliders-h text-xs"></i>
            <span>Edit Invoice Data</span>
          </button>
        </div>

        {/* Mobile Slide-over Drawer for Data Input Console */}
        {isMobileConsoleOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end no_print">
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileConsoleOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Slide Drawer Content */}
            <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
              {/* Drawer Header */}
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-brand-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    BL
                  </div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                    Data Input Console
                  </h3>
                </div>
                <button
                  onClick={() => setIsMobileConsoleOpen(false)}
                  className="w-8 h-8 rounded-xl bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 flex items-center justify-center transition"
                  aria-label="Close drawer"
                >
                  <i className="fas fa-times text-sm"></i>
                </button>
              </div>

              {/* Drawer Body (Scrollable Form) */}
              <div className="flex-1 overflow-y-auto p-4">
                <InvoiceForm
                  form={form}
                  onChange={handleFieldChange}
                  calculatedTotal={calculatedTotal}
                  balanceOutstanding={balanceOutstanding}
                />
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <button
                  onClick={() => setIsMobileConsoleOpen(false)}
                  className="w-full bg-brand-primary hover:bg-brand-primary_hover text-white font-bold py-2.5 rounded-xl text-xs transition shadow-md"
                >
                  Apply &amp; View Preview
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          {/* DESKTOP: Modular Input Console (5 cols on lg, sticky on scroll) */}
          <aside className="hidden lg:block lg:col-span-5 no_print w-full sticky top-24 self-start z-30">
            <InvoiceForm
              form={form}
              onChange={handleFieldChange}
              calculatedTotal={calculatedTotal}
              balanceOutstanding={balanceOutstanding}
            />
          </aside>

          {/* RIGHT: Live 2-Page A4 Preview (7 cols on lg, full width on mobile) */}
          <div className="lg:col-span-7 w-full overflow-x-auto pb-8">
            <div className="w-full flex justify-between items-center mb-4 px-2 no_print">
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Live Document Render (Exact 2-Page A4)
              </span>
              {/* <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800 px-2.5 py-0.5 rounded font-mono font-medium">
                Print&nbsp;Ready
              </span> */}
            </div>

            {/* Scrollable Container with left alignment on overflow */}
            <div className="w-full overflow-x-auto flex flex-col items-start lg:items-center py-2 px-1">
              {/* A4 PRINTABLE DOCUMENT CONTAINER */}
              <div
                id="printable-document"
                ref={previewRef}
                className="flex flex-col items-center space-y-8 print:space-y-0 w-[210mm] max-w-none flex-shrink-0"
              >
                <InvoicePageOne
                  form={form}
                  subtotal={subtotal}
                  calculatedTotal={calculatedTotal}
                  amountInWords={amountInWords}
                  signatureSrc={activeSignature}
                />

                <InvoicePageTwo
                  form={form}
                  calculatedTotal={calculatedTotal}
                  balanceOutstanding={balanceOutstanding}
                  amountPaidInWords={amountPaidInWords}
                  signatureSrc={activeSignature}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
