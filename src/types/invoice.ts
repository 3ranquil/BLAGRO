export const enum PaymentStatus {
  PaidInFull = 'PAID IN FULL',
  PartiallyPaid = 'PARTIALLY PAID',
  Pending = 'PENDING',
}

export const enum ItemType {
  Vehicle = 'vehicle',
  Commodity = 'commodity',
}

export interface InvoiceItem {
  id: string;
  itemType: ItemType;
  itemTitle: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleColour?: string;
  chassisNo?: string;
  vregCertNo?: string;
  unitPrice: number;
  quantity: number;
}

export interface InvoiceFormState {
  invoiceNo: string;
  receiptNo: string;
  issueDate: string;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;
  items: InvoiceItem[];
  discount: number;
  amountPaid: number;
  selectedSignature: string;
  customSignature: string | null;
}

export interface InvoiceRecord {
  invoiceNo: string;
  receiptNo: string;
  date: string;
  clientName: string;
  totalAmount: number;
  createdAt?: string;
  details?: Record<string, unknown>;
}
