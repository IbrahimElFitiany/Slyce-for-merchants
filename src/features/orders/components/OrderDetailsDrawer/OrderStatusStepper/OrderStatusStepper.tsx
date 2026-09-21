import DeliveryIcon from "@/components/icons/DeliveryIcon";
import { CookingIcon } from "@/components/icons/CookingIcon";
import { OrderPlacedIcon } from "@/components/icons/OrderPlacedIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { OrderStatus, type StatusHistoryItem, type StatusStep } from "../../../types.domain";
import { CancelledIcon } from "@/components/icons/CancelledIcon";
import { VerifiedIcon } from "@/components/icons/VerifiedIcon";
import Step from "./Step";


const HAPPY_PATH_STEPS: StatusStep[] = [

  { status: OrderStatus.Placed,
    icon: <OrderPlacedIcon size={28} />,
    description: "Order placed and confirmed"
  },
  { status: OrderStatus.Preparing,
    icon: <CookingIcon  size={28} />,
    description: "Kitchen is on it"
  },
  { status: OrderStatus.WaitingForDriver,
    icon: <ClockIcon size={28}/>,
    description: "Looking for nearby driver"
  },
  { status: OrderStatus.OutForDelivery,
    icon: <DeliveryIcon size={28}/>,
    description: "the order is on the way to the customer "
  },
  { status: OrderStatus.Delivered,
    icon: <VerifiedIcon size={28} />,
    description: "Order handed to customer"
  }
];

const CANCELLED_STEP: StatusStep = {
  status: OrderStatus.Cancelled,
  icon: <CancelledIcon size={28} />,
  description: "Order was cancelled",
};

interface OrderStatusProps {
  currentState: OrderStatus;
  orderStatusHistory: StatusHistoryItem[]
}

function OrderStatusStepper({ currentState, orderStatusHistory}: OrderStatusProps) {

  const currentStatusOrder = HAPPY_PATH_STEPS.findIndex((step)=> step.status === currentState);
  const isCancelled = currentState === OrderStatus.Cancelled;
  const isLastStepDone = currentStatusOrder >= HAPPY_PATH_STEPS.length - 1;

  console.log(currentState)

  if (isCancelled) {
    return (
    <div className="flex flex-col gap-y-5 border border-brand-grey rounded-2xl p-3.5">
      <section>
        <Step step={HAPPY_PATH_STEPS[0]} isComplete={true} isLast={false} isActive={true}/>
        <Step step={CANCELLED_STEP} isComplete={true} isLast={true} isActive={true}/>
      </section>
    </div>
  );
  }



  return (
    <div className="flex flex-col gap-y-5 border border-brand-grey rounded-2xl p-3.5">

      <section>
        {HAPPY_PATH_STEPS.map((step, i) => {

          const isComplete = i < currentStatusOrder;
          const isActive = i <= currentStatusOrder;
          const isLast = i === HAPPY_PATH_STEPS.length - 1;
          const timestamp = orderStatusHistory.find((h) => h.status === step.status)?.timestamp;

          return (
            <Step
              key={step.status}
              isActive={isActive}
              isLast={isLast}
              isComplete={isComplete}
              step={step}
              timestamp={timestamp}
            />
          )

          })
        }
      </section>

      {!isLastStepDone && (
        <button className={`bg-accent py-2 rounded-lg text-whitebg font-bold text-sm cursor-pointer  disabled:bg-brand-grey disabled:cursor-not-allowed`}>
          Mark as {HAPPY_PATH_STEPS[currentStatusOrder + 1]?.status.toLowerCase()}
        </button>
      )}

    </div>
  );
}

export default OrderStatusStepper;



export function OrderStatusStepperSkeleton() {
  return (
    <div className="flex flex-col border border-brand-grey rounded-2xl p-3.5 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => {
        const isLast = i === 4;

        return (
          <div key={i} className="flex gap-x-2">
            {/* Circle & Line Skeleton */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-brand-grey/40" />

              {!isLast && (
                <div className="w-0.5 my-1 flex-1 min-h-7 bg-brand-grey/30 rounded-full" />
              )}
            </div>

            {/* Label & Description Skeleton */}
            <div className="flex flex-1 flex-col pb-8">
              <div className="flex w-full justify-between items-center mb-1.5">
                <div className="h-4 w-28 bg-brand-grey/40 rounded-md" />
                <div className="h-3 w-10 bg-brand-grey/30 rounded-md" />
              </div>

              <div className="h-3 w-40 bg-brand-grey/30 rounded-md" />
            </div>
          </div>
        );
      })}

      {/* Button Skeleton */}
      <div className="h-9 w-full bg-brand-grey/40 rounded-lg mt-1" />
    </div>
  );
}1