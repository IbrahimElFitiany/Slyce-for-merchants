interface OrderSummarySectionProps {
  subTotal:number;
  commissionPercentage:number;
  commissionAmount:number;
  deliveryFee:number;
  total:number
}

function OrderSummarySection ({ subTotal, commissionPercentage, commissionAmount, deliveryFee, total } : OrderSummarySectionProps) {

  return (
    <section className="flex flex-col gap-y-2">

      <div className="flex flex-col gap-y-2 text-text-grey font-medium">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subTotal} EGP</span>
        </div>

        <div className="flex justify-between">
          <span>Commission ({commissionPercentage}%)</span>
          <span>-{(commissionAmount).toFixed(2)} EGP</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{(deliveryFee).toFixed(2)} EGP</span>
        </div>

      </div>

      <div className="w-full border-t border-brand-grey"></div>

      <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{(total).toFixed(2)} EGP</span>
      </div>

    </section>
  )

}

export default OrderSummarySection

export function OrderSummarySectionSkeleton() {
  return (
    <section className="flex flex-col gap-y-3 animate-pulse">
      <div className="flex flex-col gap-y-2.5">
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-brand-grey/40 rounded-md" />
          <div className="h-4 w-16 bg-brand-grey/40 rounded-md" />
        </div>

        <div className="flex justify-between items-center">
          <div className="h-4 w-32 bg-brand-grey/40 rounded-md" />
          <div className="h-4 w-20 bg-brand-grey/40 rounded-md" />
        </div>

        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-brand-grey/40 rounded-md" />
          <div className="h-4 w-16 bg-brand-grey/40 rounded-md" />
        </div>
      </div>

      <div className="w-full border-t border-brand-grey" />

      <div className="flex justify-between items-center pt-1">
        <div className="h-5 w-16 bg-brand-grey/40 rounded-md" />
        <div className="h-5 w-24 bg-brand-grey/40 rounded-md" />
      </div>
    </section>
  );
}