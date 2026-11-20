import { InvoiceFormState, ItemType } from '@/types/invoice';

interface InvoicePageOneProps {
  form: InvoiceFormState;
  subtotal: number;
  calculatedTotal: number;
  amountInWords: string;
  signatureSrc: string;
}

export function InvoicePageOne({
  form,
  subtotal,
  calculatedTotal,
  amountInWords,
  signatureSrc,
}: InvoicePageOneProps) {
  return (
    <div
      id="invoice-page-1"
      className="page_a4 page-break-after shadow-2xl rounded-lg print:rounded-none flex flex-col justify-between text-zinc-800 text-[11px] leading-normal font-sans"
    >
      {/* Top Header & Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Header Block */}
        <div>
          <div className="flex justify-between items-start border-b-4 border-brand-invoice_blue pb-3 mb-3">
            <div>
              <h2 className="text-xl font-black text-brand-invoice_blue_header tracking-tight">
                MARCK4 D-VENTURES
              </h2>
              <p className="text-[10px] font-bold text-brand-invoice_blue tracking-wider">
                BN: 3705650
              </p>
              <p className="text-[9px] text-zinc-500 max-w-xs mt-0.5">
                Importation of used vehicles, Export &amp; Distributor Sunflower Oil and Agro Related
              </p>
              <p className="text-[9px] text-zinc-600 mt-0.5">
                <strong>Address:</strong> Plot 19, Road 23, FHA, Gonin, Kaduna.<br />
                <strong>Email:</strong> emereole.bm@gmail.com | <strong>Phone:</strong> 08023445713
              </p>
            </div>

            <div className="text-right flex flex-col items-end">
              <span className="text-2xl font-black tracking-tight text-brand-invoice_blue uppercase">
                Tax Invoice
              </span>
              <div className="mt-1 space-y-0.5 text-right text-[10px]">
                <p>
                  <span className="text-zinc-500 font-semibold">INVOICE NO:</span>{' '}
                  <strong className="text-brand-invoice_blue_header font-mono text-xs">
                    {form.invoiceNo || 'INV-0001'}
                  </strong>
                </p>
                <p>
                  <span className="text-zinc-500 font-semibold">DATE OF ISSUE:</span>{' '}
                  <strong>{form.issueDate || '20 Nov 2026'}</strong>
                </p>
                <p>
                  <span className="text-zinc-500 font-semibold">DUE DATE:</span>{' '}
                  <span>Due on Receipt</span>
                </p>
                <div className="pt-0.5">
                  <span className="inline-block bg-brand-invoice_blue_light text-brand-invoice_blue font-bold px-2 py-0.5 rounded text-[9px] border border-brand-invoice_blue_border uppercase">
                    {form.paymentStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bill To Card */}
          <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200 mb-3 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] font-bold text-brand-invoice_blue uppercase tracking-widest block mb-0.5">
                Bill To:
              </span>
              <h4 className="font-bold text-zinc-900 text-xs">{form.clientName || 'Purchaser / Company Name'}</h4>
              <p className="text-zinc-600 text-[10px] mt-0.5 leading-tight">{form.clientAddress || 'Address on file'}</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold text-brand-invoice_blue uppercase tracking-widest block mb-0.5">
                Contact &amp; Currency
              </span>
              <p className="text-zinc-600 text-[10px]"><strong>Phone:</strong> {form.clientPhone || 'N/A'}</p>
              <p className="text-zinc-600 text-[10px]"><strong>Email:</strong> {form.clientEmail || 'N/A'}</p>
              <p className="text-[10px] text-zinc-600 mt-0.5 font-semibold">Currency: Nigerian Naira (NGN)</p>
            </div>
          </div>

          {/* Particulars Table with Multi-Item Iteration */}
          <table className="w-full border-collapse mb-3">
            <thead>
              <tr className="bg-brand-invoice_blue_header text-white text-[9px] font-bold uppercase tracking-wider">
                <th className="py-1.5 px-3 text-left w-12">QTY</th>
                <th className="py-1.5 px-3 text-left">DESCRIPTION &amp; SPECIFICATIONS</th>
                <th className="py-1.5 px-3 text-right w-28">PRICE (₦)</th>
                <th className="py-1.5 px-3 text-right w-32">AMOUNT (₦)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 border-b border-zinc-200">
              {form.items.map((item, idx) => {
                const itemTotal = (item.unitPrice || 0) * (item.quantity || 1);
                return (
                  <tr key={item.id || idx}>
                    <td className="py-2 px-3 text-left font-bold text-zinc-700 align-top text-[10px]">
                      {item.quantity || 1}
                    </td>
                    <td className="py-2 px-3 text-left align-top">
                      <p className="font-bold text-zinc-900 text-[11px] mb-0.5">
                        {item.itemTitle || (item.itemType === ItemType.Vehicle ? 'Vehicle Unit' : 'Commodity Batch')}
                      </p>
                      {item.itemType === ItemType.Vehicle ? (
                        <p className="text-[9px] text-zinc-600 leading-tight">
                          {item.vehicleMake && <span>Make: <strong>{item.vehicleMake}</strong> | </span>}
                          {item.vehicleModel && <span>Model: <strong>{item.vehicleModel}</strong> | </span>}
                          {item.vehicleColour && <span>Colour: <strong>{item.vehicleColour}</strong> | </span>}
                          {item.chassisNo && <span>Chassis: <strong className="font-mono">{item.chassisNo}</strong> | </span>}
                          {item.vregCertNo && <span>VREG: <strong className="font-mono">{item.vregCertNo}</strong></span>}
                        </p>
                      ) : (
                        <p className="text-[9px] text-zinc-600">{item.itemTitle}</p>
                      )}
                    </td>
                    <td className="py-2 px-3 text-right font-medium text-zinc-700 align-top text-[10px]">
                      {item.unitPrice ? item.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '0.00'}
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-zinc-900 align-top text-[10px]">
                      {itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Amount in Words & Totals Grid */}
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-7 bg-brand-invoice_blue_light/60 p-2.5 rounded-xl border border-brand-invoice_blue_border flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-invoice_blue block mb-0.5">
                  Amount In Words:
                </span>
                <p className="font-bold text-brand-invoice_blue_header text-[10px] italic leading-tight">
                  &ldquo;{amountInWords}&rdquo;
                </p>
              </div>
              <p className="text-[8px] text-zinc-500 mt-1">
                Official tax document issued by MARCK4 D-VENTURES under statutory trade regulations.
              </p>
            </div>

            <div className="col-span-5 space-y-1 text-right text-[10px]">
              <div className="flex justify-between py-0.5 border-b border-zinc-100">
                <span className="text-zinc-500">Subtotal:</span>
                <span className="font-semibold">₦{subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-zinc-100">
                <span className="text-zinc-500">Discount:</span>
                <span className="font-semibold">{form.discount === 0 ? 'Nil' : `₦${form.discount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-zinc-100">
                <span className="text-zinc-500">Tax Rate / VAT:</span>
                <span className="font-semibold">0.00%</span>
              </div>
              <div className="flex justify-between py-1.5 bg-brand-invoice_blue text-white px-2 rounded-lg font-black text-[11px]">
                <span>Total Due:</span>
                <span>₦{calculatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>

          {/* Standard Terms and Conditions */}
          <div className="bg-zinc-50 rounded-xl p-2.5 border border-zinc-200">
            <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-700 block mb-0.5">
              Terms and Conditions:
            </span>
            <ol className="list-decimal list-inside text-[8px] text-zinc-600 space-y-0.5 leading-tight">
              <li>Sold and accepted as at the present condition of the item/vehicle.</li>
              <li>The buyer acknowledges that the vehicle/cargo is sold AS IS and delivered.</li>
              <li>The buyer confirms that he/she has inspected the vehicle/goods and accepts its current condition.</li>
              <li>The seller makes no warranties or refunds regarding the condition, performance or fitness for any purpose.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Authorized Signature Footer (Sticky Bottom of Page 1) */}
      <div className="mt-auto pt-3 border-t border-zinc-200 grid grid-cols-2 gap-8 items-end flex-shrink-0">
        <div className="text-center">
          <div className="h-12 border-b border-zinc-400 mb-1 flex items-end justify-center">
            <span className="text-[9px] text-zinc-400 italic mb-1">[Customer Signature]</span>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-700">
            Customer&apos;s Signature
          </p>
        </div>

        <div className="text-center relative">
          <div className="h-12 border-b border-zinc-400 mb-1 flex items-center justify-center relative">
            {signatureSrc && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={signatureSrc}
                alt="Authorized Signature"
                className="h-14 w-auto object-contain absolute -top-2"
              />
            )}
          </div>
          <p className="text-[9px] font-bold uppercase tracking-wider text-brand-invoice_blue">
            Authorized Signature
          </p>
        </div>
      </div>
    </div>
  );
}
