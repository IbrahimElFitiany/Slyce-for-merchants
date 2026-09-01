export interface OrderSummary {
  customerName: string;
  orderId: string;
  orderItemsCount:number;
  orderStatus:string;
  date: string;
  subTotal: string;
}

export interface Paginated<T> {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: T[];
}