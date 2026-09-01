import { formatCurrency } from "@/utils/formatters";
import type { OrderSummary } from "../types";
import { StatusBadge } from "./StatusBadge";

interface OrderSummaryRowProps {
  orderSummary:OrderSummary,
  onClick: () => void
}


function OrderSummaryRow({ onClick, orderSummary }: OrderSummaryRowProps ) {

  return (
    <tr
      className="cursor-pointer hover:bg-black/3 transition-colors [&>td]:py-3.5 [&>td]:px-6"
      onClick={onClick}
    >

      {/* order id */}
      <td className="flex flex-col px-6 text-sm text-brand-black font-semibold">
        {orderSummary.orderId}
        <span className="text-text-grey text-sm font-medium">{orderSummary.orderItemsCount} items</span>
      </td>

      {/* order status */}
      <td className="py-4 px-6">
        <StatusBadge status={orderSummary.orderStatus}/>
      </td>

      <td className="font-semibold text-text-grey">{orderSummary.date}</td>
      <td className="font-medium text-text-grey">{orderSummary.customerName}</td>
      <td className="text-right font-medium text-text-grey">{formatCurrency(orderSummary.subTotal)} EGP</td>
    </tr>
  );
}

export default OrderSummaryRow