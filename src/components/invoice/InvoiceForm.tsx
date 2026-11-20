"use client";

import { PaymentStatus, ItemType, InvoiceFormState, InvoiceItem } from "@/types/invoice";

interface InvoiceFormProps {
  form: InvoiceFormState;
  onChange: <K extends keyof InvoiceFormState>(
    key: K,
    value: InvoiceFormState[K],
  ) => void;
  calculatedTotal: number;
  balanceOutstanding: number;
}

/**
 * @author traj3ctory
 * @function InvoiceForm
 */
export function InvoiceForm({
  form,
  onChange,
  calculatedTotal,
  balanceOutstanding,
}: InvoiceFormProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        onChange("customSignature", base64);
        onChange("selectedSignature", "custom");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      itemType: ItemType.Commodity,
      itemTitle: "",
      unitPrice: 0,
      quantity: 1,
    };
    onChange("items", [...form.items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    if (form.items.length <= 1) return;
    onChange(
      "items",
      form.items.filter((item) => item.id !== id),
    );
  };

  const handleUpdateItem = <K extends keyof InvoiceItem>(
    id: string,
    key: K,
    value: InvoiceItem[K],
  ) => {
    const updated = form.items.map((item) =>
      item.id === id ? { ...item, [key]: value } : item,
    );
    onChange("items", updated);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 md:p-6 p-3 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto transition-colors duration-200">
      <div>
        <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">
          Data Input Console
        </span>
        <h2 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">
          Transaction Particulars
        </h2>
      </div>

      {/* 1. Document References */}
      <div className="space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
        <h3 className="text-xs font-bold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
          1. Document References
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label_standard">Invoice Number</label>
            <input
              type="text"
              value={form.invoiceNo}
              placeholder="e.g. INV-0056"
              onChange={(e) => onChange("invoiceNo", e.target.value)}
              className="input_field_standard font-semibold"
            />
          </div>
          <div>
            <label className="label_standard">Receipt Number</label>
            <input
              type="text"
              value={form.receiptNo}
              placeholder="e.g. REC-0056"
              onChange={(e) => onChange("receiptNo", e.target.value)}
              className="input_field_standard font-semibold"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label_standard">Date of Issue</label>
            <input
              type="text"
              value={form.issueDate}
              placeholder="e.g. 20 Nov 2026"
              onChange={(e) => onChange("issueDate", e.target.value)}
              className="input_field_standard"
            />
          </div>
          <div>
            <label className="label_standard">Payment Status</label>
            <select
              value={form.paymentStatus}
              onChange={(e) =>
                onChange("paymentStatus", e.target.value as PaymentStatus)
              }
              className="input_field_standard"
            >
              <option value={PaymentStatus.PaidInFull}>PAID IN FULL</option>
              <option value={PaymentStatus.PartiallyPaid}>
                PARTIALLY PAID
              </option>
              <option value={PaymentStatus.Pending}>PENDING</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Customer Details */}
      <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h3 className="text-xs font-bold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
          2. Purchaser / Client Details
        </h3>
        <div>
          <label className="label_standard">Full Name / Entity</label>
          <input
            type="text"
            value={form.clientName}
            placeholder="Enter customer or company name..."
            onChange={(e) => onChange("clientName", e.target.value)}
            className="input_field_standard font-medium"
          />
        </div>
        <div>
          <label className="label_standard">Billing / Delivery Address</label>
          <input
            type="text"
            value={form.clientAddress}
            placeholder="Enter complete physical address..."
            onChange={(e) => onChange("clientAddress", e.target.value)}
            className="input_field_standard"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label_standard">Phone Number</label>
            <input
              type="text"
              value={form.clientPhone}
              placeholder="e.g. 08012345678"
              onChange={(e) => onChange("clientPhone", e.target.value)}
              className="input_field_standard"
            />
          </div>
          <div>
            <label className="label_standard">Email Address</label>
            <input
              type="email"
              value={form.clientEmail}
              placeholder="e.g. client@company.com"
              onChange={(e) => onChange("clientEmail", e.target.value)}
              className="input_field_standard"
            />
          </div>
        </div>
      </div>

      {/* 3. Description & Line Items (Multi-Item Support) */}
      <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
            3. Line Items &amp; Particulars ({form.items.length})
          </h3>
          <button
            type="button"
            onClick={handleAddItem}
            className="text-xs font-bold bg-brand-primary hover:bg-brand-primary_hover text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition"
          >
            <i className="fas fa-plus text-[10px]"></i> Add Item
          </button>
        </div>

        <div className="space-y-4">
          {form.items.map((item, index) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 space-y-3"
            >
              <div className="flex justify-between items-center pb-2 border-b border-zinc-200/60 dark:border-zinc-700">
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Item #{index + 1}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex text-[11px] border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateItem(item.id, "itemType", ItemType.Vehicle)
                      }
                      className={`px-2.5 py-0.5 transition-colors ${
                        item.itemType === ItemType.Vehicle
                          ? "bg-brand-primary text-white font-bold"
                          : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                      }`}
                    >
                      Vehicle
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateItem(
                          item.id,
                          "itemType",
                          ItemType.Commodity,
                        )
                      }
                      className={`px-2.5 py-0.5 transition-colors ${
                        item.itemType === ItemType.Commodity
                          ? "bg-brand-primary text-white font-bold"
                          : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                      }`}
                    >
                      Commodity
                    </button>
                  </div>

                  {form.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="w-6 h-6 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center transition"
                      title="Remove item"
                    >
                      <i className="fas fa-trash-alt text-[10px]"></i>
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 block mb-1">
                  Item Description / Title
                </label>
                <input
                  type="text"
                  value={item.itemTitle}
                  placeholder={
                    item.itemType === ItemType.Vehicle
                      ? "e.g. TOYOTA HIGHLANDER — 2005 Model"
                      : "e.g. Dried Split Ginger — 25 Metric Tonnes"
                  }
                  onChange={(e) =>
                    handleUpdateItem(item.id, "itemTitle", e.target.value)
                  }
                  className="input_field_standard text-xs font-semibold py-1.5"
                />
              </div>

              {item.itemType === ItemType.Vehicle ? (
                <>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        Make
                      </label>
                      <input
                        type="text"
                        value={item.vehicleMake || ""}
                        placeholder="e.g. Toyota"
                        onChange={(e) =>
                          handleUpdateItem(
                            item.id,
                            "vehicleMake",
                            e.target.value,
                          )
                        }
                        className="input_field_standard text-xs py-1"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        Model / Year
                      </label>
                      <input
                        type="text"
                        value={item.vehicleModel || ""}
                        placeholder="e.g. 2005"
                        onChange={(e) =>
                          handleUpdateItem(
                            item.id,
                            "vehicleModel",
                            e.target.value,
                          )
                        }
                        className="input_field_standard text-xs py-1"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        Colour
                      </label>
                      <input
                        type="text"
                        value={item.vehicleColour || ""}
                        placeholder="e.g. Ash"
                        onChange={(e) =>
                          handleUpdateItem(
                            item.id,
                            "vehicleColour",
                            e.target.value,
                          )
                        }
                        className="input_field_standard text-xs py-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        Chassis / VIN
                      </label>
                      <input
                        type="text"
                        value={item.chassisNo || ""}
                        placeholder="e.g. JTEHP21A..."
                        onChange={(e) =>
                          handleUpdateItem(item.id, "chassisNo", e.target.value)
                        }
                        className="input_field_standard text-xs font-mono py-1"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        VREG Cert No
                      </label>
                      <input
                        type="text"
                        value={item.vregCertNo || ""}
                        placeholder="e.g. V4928-160..."
                        onChange={(e) =>
                          handleUpdateItem(
                            item.id,
                            "vregCertNo",
                            e.target.value,
                          )
                        }
                        className="input_field_standard text-xs font-mono py-1"
                      />
                    </div>
                  </div>
                </>
              ) : null}

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                    Unit Price (₦)
                  </label>
                  <input
                    type="number"
                    value={item.unitPrice || ""}
                    placeholder="0"
                    onChange={(e) =>
                      handleUpdateItem(
                        item.id,
                        "unitPrice",
                        Number(e.target.value) || 0,
                      )
                    }
                    className="input_field_standard text-xs font-semibold py-1"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 block mb-0.5">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={item.quantity || ""}
                    placeholder="1"
                    onChange={(e) =>
                      handleUpdateItem(
                        item.id,
                        "quantity",
                        Number(e.target.value) || 1,
                      )
                    }
                    className="input_field_standard text-xs font-semibold py-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Financial Calculations */}
      <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h3 className="text-xs font-bold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
          4. Discounts &amp; Payment Breakdown
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label_standard">Discount (₦)</label>
            <input
              type="number"
              value={form.discount || ""}
              placeholder="0"
              onChange={(e) =>
                onChange("discount", Number(e.target.value) || 0)
              }
              className="input_field_standard font-semibold"
            />
          </div>
          <div>
            <label className="label_standard">Amount Paid (₦)</label>
            <input
              type="number"
              value={form.amountPaid || ""}
              placeholder="0"
              onChange={(e) =>
                onChange("amountPaid", Number(e.target.value) || 0)
              }
              className="input_field_standard font-semibold text-brand-primary"
            />
          </div>
        </div>

        <div>
          <label className="label_standard">Payment Method</label>
          <input
            type="text"
            value={form.paymentMethod}
            placeholder="e.g. Confirmed Bank Settlement"
            onChange={(e) => onChange("paymentMethod", e.target.value)}
            className="input_field_standard"
          />
        </div>

        <div className="p-3.5 bg-brand-primary_light dark:bg-emerald-950/30 rounded-xl border border-brand-primary_border dark:border-emerald-800/40 text-xs space-y-1.5">
          <div className="flex justify-between font-bold text-zinc-700 dark:text-zinc-200">
            <span>Total Amount Calculated:</span>
            <span className="text-brand-primary font-black">
              ₦
              {calculatedTotal.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
            <span>Balance Outstanding:</span>
            <span
              className={
                balanceOutstanding > 0
                  ? "text-amber-700 dark:text-amber-400 font-bold"
                  : "text-brand-primary font-bold"
              }
            >
              ₦
              {balanceOutstanding.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}{" "}
              {balanceOutstanding === 0 ? "(NIL)" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Signatures Selection */}
      <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <h3 className="text-xs font-bold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
          5. Authorized Signatures
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() =>
              onChange("selectedSignature", "/assets/signatures/signature1.png")
            }
            className={`p-2 rounded-xl border text-xs font-medium text-center transition-colors ${
              form.selectedSignature === "/assets/signatures/signature1.png"
                ? "border-brand-primary bg-brand-primary_light dark:bg-emerald-950/40 text-brand-primary font-bold"
                : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            Signature A
          </button>
          <button
            type="button"
            onClick={() =>
              onChange("selectedSignature", "/assets/signatures/signature2.png")
            }
            className={`p-2 rounded-xl border text-xs font-medium text-center transition-colors ${
              form.selectedSignature === "/assets/signatures/signature2.png"
                ? "border-brand-primary bg-brand-primary_light dark:bg-emerald-950/40 text-brand-primary font-bold"
                : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            Signature B
          </button>
          <label
            className={`p-2 rounded-xl border text-xs font-medium text-center cursor-pointer transition-colors ${
              form.selectedSignature === "custom"
                ? "border-brand-primary bg-brand-primary_light dark:bg-emerald-950/40 text-brand-primary font-bold"
                : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            Upload Custom
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
