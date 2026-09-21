import type { OrderItem } from "../../types.domain"
import OrderItemRow from "./OrderItemRow"

interface OrderItemsSectionProps {
  orderItems: OrderItem[]
}

function OrderItemsSection({orderItems}: OrderItemsSectionProps ) {
  return (
    <div className="flex flex-col divide-brand-grey divide-y border border-brand-grey rounded-2xl">

      {orderItems.map((item) => <OrderItemRow key={item.mealName && item.size} order={item}/>) }

    </div>
  )
}

export default OrderItemsSection


export function OrderItemsSectionSkeleton() {
  return (
    <div className="flex flex-col divide-brand-grey divide-y border border-brand-grey rounded-2xl animate-pulse">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between p-3.5">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-xl bg-brand-grey/40" />
            <div className="flex flex-col gap-y-1.5">
              <div className="h-4 w-28 bg-brand-grey/40 rounded-md" />
              <div className="h-3 w-16 bg-brand-grey/30 rounded-md" />
            </div>
          </div>
          <div className="h-4 w-14 bg-brand-grey/40 rounded-md" />
        </div>
      ))}
    </div>
  );
}