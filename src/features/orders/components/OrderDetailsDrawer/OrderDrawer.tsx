import Drawer from "@/components/common/Drawer"
import CloseIcon from "@/components/icons/CloseIcon";
import OrderStatusStepper, { OrderStatusStepperSkeleton } from "./OrderStatusStepper/OrderStatusStepper";
import { OrderStatus, ORDER_STATUS_STYLES } from "../../types.domain";
import { useOrderDetailsQuery } from "../../hooks/useOrderDetailsQuery";
import OrderSummarySection, { OrderSummarySectionSkeleton } from "./OrderSummarySection";
import OrderItemsSection, { OrderItemsSectionSkeleton } from "./OrderItemsSection";
import { useBranchContext } from "@/context/BranchContext";


interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  orderStatus: OrderStatus;
  customerName: string;
}

function OrderDrawer({ isOpen, onClose, orderId, orderStatus, customerName }: OrderDrawerProps) {

  const {
    order,
    isPending
  } = useOrderDetailsQuery(orderId);

  const {selectedBranch} = useBranchContext()

  const currentStatus = order?.orderStatus ?? orderStatus;
  const branch = order?.branchName ?? selectedBranch?.name;

  return (
    <Drawer className={"gap-y-6 w-[24%] py-8"} onClose={onClose} isOpen={isOpen}>

      <header className="flex flex-col mb-6">

        <div className="flex justify-between items-center gap-x-20">

          <h1 className="text-3xl font-bold">Order Details</h1>

          <button
            type="button"
            className="cursor-pointer p-2 rounded-full border-1 border-brand-grey"
            onClick={onClose}
          >
            <CloseIcon size={25} />
          </button>

        </div>

        <div className="flex gap-x-2 items-center">

          <h2>Order ID: <span className="font-bold">{orderId}</span></h2>


          <span
            className={`text-sm font-bold w-fit py-0.5 px-2.5 rounded-lg
            ${ ORDER_STATUS_STYLES[currentStatus] ?? "text-gray-600 bg-gray-100"}`}
          >
            {currentStatus}
          </span>

        </div>
        <span className="font-bold text-text-grey">{branch}</span>
        <span className="text-text-grey font-medium">{customerName}</span>

      </header>

      {/* orderStatus */}
      <div className="flex flex-col gap-y-2.5">

        <h1 className="font-bold text-xl">Order status</h1>
        {
          isPending || !order
          ?  <OrderStatusStepperSkeleton/>
          :  <OrderStatusStepper
              currentState={order.orderStatus}
              orderStatusHistory={order.statusHistory}
              />
        }


      </div>

      <div className="w-full border-dashed border-1 border-brand-grey"></div>

      {/* order Items */}
      <div className="flex flex-col gap-y-2.5">

        <h1 className="font-bold text-xl">Order Items</h1>

        {
          isPending || !order
          ? <OrderItemsSectionSkeleton/>
          : <OrderItemsSection orderItems={order.orderItems}/>
        }

      </div>

      <div className="w-full border-dashed border-1 border-brand-grey"></div>

      {/* order summary */}
      <div className="flex flex-col gap-y-3">

        <h1 className="font-bold text-xl">Order Summary</h1>

        {
          isPending || !order
            ? <OrderSummarySectionSkeleton />
            : <OrderSummarySection
                subTotal={order.orderSummary.subtotal}
              commissionPercentage={order.orderSummary.commissionPercent}
              commissionAmount={order.orderSummary.commissionAmount}
              deliveryFee={order.orderSummary.deliveryFee}
                total={order.orderSummary.total}
              />
        }

      </div>

    </Drawer>
  )
}

export default OrderDrawer