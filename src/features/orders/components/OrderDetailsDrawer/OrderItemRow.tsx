import type { OrderItem } from "../../types.domain"

interface OrderItemRowProps{
  order: OrderItem
}
function OrderItemRow ({order}: OrderItemRowProps){
  return(
    <div className="flex p-2 gap-x-2">

      {/* image */}
      <div className="h-18 aspect-square overflow-hidden rounded-xl">
        <img
          className="object-cover"
          src={order.mealImage}
          alt={order.mealName}
        />
      </div>

      {/* title & price and stuff */}
      <div className="flex-1 flex flex-col gap-y-2">

        <div className="flex flex-col gap-y-0.5">
          <p className="font-bold text-md">{order.mealName}</p>
          <p className="bg-accent/90 w-fit py-0.5 px-2 rounded-full text-xs font-bold text-whitebg">{order.size}</p>
        </div>

        <div className="flex font-medium text-sm text-text-grey gap-x-10">
          <span>{order.sizePrice.toFixed(2)} <span>EGP</span></span>
          <span>x<span>{order.quantity}</span></span>
          <span className="text-brand-black">{(order.totalPrice).toFixed(2)} <span>EGP</span></span>
        </div>

      </div>

    </div>
  )
}

export default OrderItemRow