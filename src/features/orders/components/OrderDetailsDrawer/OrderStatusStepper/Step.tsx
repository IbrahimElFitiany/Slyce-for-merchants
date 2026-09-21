import type { StatusStep } from "@/features/orders/types.domain";
import { formatTime } from "@/utils/formatters";

interface StepProps{
  step: StatusStep;
  isComplete: boolean;
  isActive: boolean;
  isLast: boolean;
  timestamp?: string;
}

function Step ({step, isActive, isLast, isComplete, timestamp}:StepProps) {

  return (
    <div className="flex gap-x-2">

      {/* circle and line */}
      <div className="flex flex-col items-center">

        {/* circle */}
        <div className="flex items-center justify-center">

          <div className={`p-2 rounded-full transition-all duration-300
            ${isActive ? "bg-accent text-whitebg" : "outline-1 outline-dashed outline-brand-black/50"}`}
          >
            {step.icon}
          </div>

        </div>

        {/* step line */}
        { !isLast &&  <span className={`border my-1 flex-1 min-h-7 rounded-full ${ isComplete ? "border-accent" : "border-brand-grey"}`}/>}

      </div>

      {/* stepInfo */}
      <div className="flex flex-1 flex-col">

        <div className="flex w-full justify-between">

          <span className="font-bold text-brand-black text-sm">
            {step.status}
          </span>

          {timestamp && <span className="text-text-grey font-medium text-xs">{formatTime(timestamp)}</span>
          }

        </div>

        <span className="font-medium text-text-grey text-xs">
          {step.description}
        </span>
      </div>

    </div>
  )
}

export default Step