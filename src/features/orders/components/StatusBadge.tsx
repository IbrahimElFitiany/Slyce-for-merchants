import type { OrderSummary } from "../types";

interface StatusBadgeProps {
  status: OrderSummary["orderStatus"];
}

const STATUS_STYLES: Record<OrderSummary["orderStatus"], string> = {
  Pending: "text-[#ab8000] bg-[#ab8000]/20",
  Preparing: "text-[#ab8000] bg-[#ab8000]/20",
  Delivered: "text-[#00ab36] bg-[#00ab36]/20",
  "Out For Delivery": "text-[#0055ab] bg-[#0055ab]/20",
  Cancelled: "text-[#ab0000] bg-[#ab0000]/20",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-block w-fit rounded-full px-3 py-0.5 font-medium ${ STATUS_STYLES[status] ?? "text-gray-600 bg-gray-100"}`}>
      ⚫ {status}
    </span>
  );
}