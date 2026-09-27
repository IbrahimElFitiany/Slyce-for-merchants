import { formatTimeSlot } from "@/utils/formatters";
import type { WeeklySchedule } from "../types.domain";

interface ScheduleProps {
  schedule: WeeklySchedule;
}

function Schedule({ schedule }: ScheduleProps) {

  return (
    <div className="border border-brand-grey rounded-2xl divide-y divide-brand-grey">

      {schedule.map((daySchedule) => (
        <div
          key={daySchedule.day}
          className="flex justify-between px-5 py-4 text-base font-normal text-brand-black"
        >
          {/* day */}
          <span>{daySchedule.day}</span>

          {/* time slots */}
          <div className="flex flex-col gap-y-1 text-right tabular-nums">
            {daySchedule.slots.length === 0
            ? <span className="text-text-grey">Closed</span>
            : daySchedule.slots.map((slot, index) => (
                <span key={index}>
                  {formatTimeSlot(slot.from)} – {formatTimeSlot(slot.to)}
                </span>
              ))
            }
          </div>

        </div>
      ))}
    </div>
  );
}

export default Schedule;


export function ScheduleSkeleton() {

  return (
    <div className="border border-brand-grey rounded-2xl divide-y divide-brand-grey animate-pulse">

      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex justify-between px-4 py-4.5 items-center">

          <div className="h-5 w-24 bg-brand-grey rounded-md" />

          <div className="h-5 w-32 bg-brand-grey rounded-md" />

        </div>
      ))}
    </div>
  );
}
