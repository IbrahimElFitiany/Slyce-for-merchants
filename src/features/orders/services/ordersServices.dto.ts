export interface GetBranchOrdersResponseDto {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: OrderItemResponseDto[];
}

export interface OrderItemResponseDto {
  orderId: string;
  customerName: string;
  createdAt: string;
  orderStatus: string;
  totalPrice: number;
  orderItemsCount: number;
}
