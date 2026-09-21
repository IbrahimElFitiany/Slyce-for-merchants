import type { ReactNode } from "react";

export interface OrderSummary {
  customerName: string;
  orderId: string;
  orderItemsCount:number;
  orderStatus:OrderStatus;
  branchName:string;
  date: string;
  subTotal: string;
}

export const OrderStatus = {
  Placed: "Placed",
  Preparing: "Preparing",
  WaitingForDriver: "Waiting For Driver",
  OutForDelivery: "Out For Delivery",
  Delivered: "Delivered",
  Cancelled: "Cancelled",
  Unknown: "Unknown",
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

export const ORDER_STATUS_STYLES: Record<OrderStatus, string> = {
  [OrderStatus.Placed]:           "text-[#4D7C0F] bg-[#84CC16]/20",
  [OrderStatus.Preparing]:        "text-[#0F766E] bg-[#14B8A6]/15",
  [OrderStatus.WaitingForDriver]: "text-[#DB2777] bg-[#EC4899]/15",
  [OrderStatus.OutForDelivery]:   "text-[#0284C7] bg-[#0EA5E9]/15",
  [OrderStatus.Delivered]:        "text-[#16A34A] bg-[#16A34A]/15",
  [OrderStatus.Cancelled]:        "text-[#DC2626] bg-[#DC2626]/15",
  [OrderStatus.Unknown]:          "text-[#7A7268] bg-[#7A7268]/15",
};

export interface StatusStep {
  status: OrderStatus;
  icon: ReactNode;
  description: string;
}

export interface StatusHistoryItem {
  status: OrderStatus;
  timestamp: string;
}

export interface OrderPaymentSummary {
  subtotal: number;
  commissionPercent: number;
  commissionAmount: number;
  deliveryFee: number;
  total: number;
}

export interface OrderItem {
  mealImage: string;
  mealName: string;
  size: string;
  sizePrice: number;
  quantity: number;
  totalPrice: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  branchName: string;
  orderDate: string;
  orderStatus: OrderStatus;
  statusHistory: StatusHistoryItem[]
  orderItems: OrderItem[];
  orderSummary: OrderPaymentSummary;
}