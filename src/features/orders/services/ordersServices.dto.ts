export interface GetBranchOrdersResponseDto {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: OrderItemSummaryResponseDto[];
}
export interface OrderItemSummaryResponseDto {
  orderId: string;
  customerName: string;
  createdAt: string;
  orderStatus: string;
  totalPrice: number;
  orderItemsCount: number;
  branchId:string;
  branchName:string;
}


export interface OrderItemDto {
  mealName:string;
  mealImageUrl:string;
  quantity:number;
  priceAtOrder:number;
}

export interface StatusHistoryItem {
  status: string;
  time: string;
}

export interface OrderItem {
  mealImage: string;
  mealName: string;
  size: string;
  sizePrice: number;
  quantity: number;
  totalPrice: number;
}

export interface OrderSummary {
  subtotal: number;
  commissionPercent: number;
  commissionAmount: number;
  deliveryFee: number;
  total: number;
}

export interface OrderDetailsDto {
  orderId: string;
  customerName: string;
  orderDate: string;
  branchId: string;
  branchName: string;
  orderStatus: string;
  statusHistory: StatusHistoryItem[];
  orderItems: OrderItem[];
  orderSummary: OrderSummary;
}