import { InvoiceFormState, ItemType } from '@/types/invoice';

interface InvoicePageTwoProps {
  form: InvoiceFormState;
  calculatedTotal: number;
  balanceOutstanding: number;
  amountPaidInWords: string;
  signatureSrc: string;
}

export function InvoicePageTwo({
  form,
  calculatedTotal,
  balanceOutstanding,
  amountPaidInWords,
  signatureSrc,
}: InvoicePageTwoProps) {
  const isPartPayment = balanceOutstanding > 0;

  return (
    <div
      id="invoice-page-2"
      className="page_a4 shadow-2xl rounded-lg print:rounded-none flex flex-col justify-between text-zinc-800 text-[11px] leading-normal font-sans"
    >
      {/* Top Header & Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Header Block */}
        <div>
          <div className="flex justify-between items-start border-b-4 border-brand-receipt_green pb-3 mb-3">
            <div>
              <h2 className="text-xl font-black text-brand-receipt_green_header tracking-tight">
                MARCK4 D-VENTURES
              </h2>
              <p className="text-[10px] font-bold text-brand-receipt_green tracking-wider">
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
              <span className="text-2xl font-black tracking-tight text-brand-receipt_green uppercase">
                Official Receipt
              </span>
              <div className="mt-1 space-y-0.5 text-right text-[10px]">
                <p>
                  <span className="text-zinc-500 font-semibold">RECEIPT NO:</span>{' '}
                  <strong className="text-brand-receipt_green_header font-mono text-xs">
                    {form.receiptNo || 'REC-0001'}
                  </strong>
                </p>
                <p>
                  <span className="text-zinc-500 font-semibold">INVOICE REF:</span>{' '}
                  <strong className="text-zinc-700 font-mono text-[11px]">{form.invoiceNo || 'INV-0001'}</strong>
                </p>
                <p>
                  <span className="text-zinc-500 font-semibold">RECEIPT DATE:</span>{' '}
                  <strong>{form.issueDate || '20 Nov 2026'}</strong>
                </p>
                <div className="pt-0.5">
                  <span
                    className={`inline-block font-bold px-2 py-0.5 rounded text-[9px] tracking-wider uppercase border ${
                      isPartPayment
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : 'bg-brand-receipt_green_light text-brand-receipt_green border-brand-receipt_green_border'
                    }`}
                  >
                    {isPartPayment ? 'Part Payment Received' : 'Full Payment Received'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Received From Card */}
          <div className="bg-brand-receipt_green_light/50 rounded-xl p-3 border border-brand-receipt_green_border mb-3 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] font-bold text-brand-receipt_green uppercase tracking-widest block mb-0.5">
                Received From:
              </span>
              <h4 className="font-bold text-zinc-900 text-xs">{form.clientName || 'Purchaser / Company Name'}</h4>
              <p className="text-zinc-600 text-[10px] mt-0.5 leading-tight">{form.clientAddress || 'Address on file'}</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold text-brand-receipt_green uppercase tracking-widest block mb-0.5">
                Settlement Mode:
              </span>
              <p className="text-zinc-700 text-[10px] font-bold">{form.paymentMethod || 'Confirmed Bank Transfer'}</p>
              <p className="text-[10px] text-brand-receipt_green font-semibold mt-0.5">
                Status: Verified Settlement
              </p>
            </div>
          </div>

          {/* Payment Description Table */}
          <table className="w-full border-collapse mb-3">
            <thead>
              <tr className="bg-brand-receipt_green text-white text-[9px] font-bold uppercase tracking-wider">
                <th className="py-1.5 px-3 text-left">DESCRIPTION / PAYMENT PARTICULARS</th>
                <th className="py-1.5 px-3 text-right w-36">AMOUNT (₦)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 border-b border-zinc-200">
              <tr>
                <td className="py-3 px-3 text-left align-top">
                  <p className="font-bold text-zinc-900 text-xs mb-1">
                    Being payment settlement for ({form.items.length}) item(s):
                  </p>
                  <ul className="text-[10px] text-zinc-700 space-y-1 mb-2 list-disc list-inside">
                    {form.items.map((item, idx) => (
                      <li key={item.id || idx}>
                        <span className="font-semibold text-zinc-900">
                          {item.quantity || 1}x {item.itemTitle || (item.itemType === ItemType.Vehicle ? 'Vehicle Unit' : 'Commodity Batch')}
                        </span>
                        {item.itemType === ItemType.Vehicle && (
                          <span className="text-[9px] text-zinc-500 ml-1">
                            (VIN: {item.chassisNo || 'N/A'})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] text-brand-receipt_green font-semibold italic">
                    Amount Paid: {amountPaidInWords}
                  </p>
                </td>
                <td className="py-3 px-3 text-right font-black text-brand-receipt_green text-sm align-top">
                  ₦{form.amountPaid ? form.amountPaid.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '0.00'}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Balance & Legal Release Block */}
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-7 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200 flex flex-col justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-600 block mb-0.5">
                Release of Ownership &amp; Possession:
              </span>
              <p className="text-[9px] text-zinc-600 leading-relaxed">
                This official receipt acknowledges and confirms payment settlement. Title and possession are transferred to the purchaser in accordance with agreed contract covenants.
              </p>
            </div>

            <div className="col-span-5 space-y-1 text-right text-[10px]">
              <div className="flex justify-between py-0.5 border-b border-zinc-100">
                <span className="text-zinc-500">Invoice Total:</span>
                <span className="font-semibold">₦{calculatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-zinc-100">
                <span className="text-zinc-500">Payment Received:</span>
                <span className="font-bold text-brand-receipt_green">₦{form.amountPaid ? form.amountPaid.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '0.00'}</span>
              </div>
              <div className="flex justify-between py-1.5 bg-brand-receipt_green text-white px-2 rounded-lg font-black text-[11px]">
                <span>Balance Outstanding:</span>
                <span>₦{balanceOutstanding.toLocaleString('en-US', { minimumFractionDigits: 2 })} {balanceOutstanding === 0 ? '(NIL)' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authorized Signature Footer (Sticky Bottom of Page 2) */}
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
          <p className="text-[9px] font-bold uppercase tracking-wider text-brand-receipt_green">
            Authorized Signature
          </p>
        </div>
      </div>
    </div>
  );
}
