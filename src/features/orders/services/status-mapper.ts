import { OrderStatus } from "@/features/orders/types.domain";

const SERVER_STATUS_MAP: Record<string, OrderStatus> = {
  "placed": OrderStatus.Placed,
  "preparing": OrderStatus.Preparing,
  "waiting_for_driver": OrderStatus.WaitingForDriver,
  "out_for_delivery": OrderStatus.OutForDelivery,
  "delivered": OrderStatus.Delivered,
  "cancelled": OrderStatus.Cancelled,
};

const DOMAIN_TO_SERVER_MAP = Object.fromEntries(
  Object.entries(SERVER_STATUS_MAP).map(([raw, domain]) => [domain, raw])
) as Record<OrderStatus, string>;


export function mapToOrderStatus(raw: string): OrderStatus {
  return SERVER_STATUS_MAP[raw] ?? OrderStatus.Unknown;
}

export function mapToServerStatus(status: OrderStatus): string | undefined {
  return DOMAIN_TO_SERVER_MAP[status];
}