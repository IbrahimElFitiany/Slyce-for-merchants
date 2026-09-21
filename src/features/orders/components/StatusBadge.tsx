import { OrderStatus, ORDER_STATUS_STYLES } from "../types.domain";

interface StatusBadgeProps {
  status: OrderStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-block w-fit rounded-lg px-2.5 py-0.5 font-medium ${ORDER_STATUS_STYLES[status] ?? "text-gray-600 bg-gray-100"}`}
    >
      {status}
    </span>
  );
}