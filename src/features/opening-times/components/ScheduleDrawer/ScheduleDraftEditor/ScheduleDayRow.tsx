import * as Switch from "@radix-ui/react-switch";
import type { DaySchedule, TimeSlot, Weekday } from "@/features/opening-times/types.domain";
import { TimeSelect } from "./TimeSelect";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/MinusIcon";

interface ScheduleDayRowProps {
  daySchedule: DaySchedule;
  onToggle: (selectedDay:Weekday, isOpen: boolean) => void;
  onAddSlot: (selectedDay:Weekday) => void;
  onRemoveSlot: (selectedDay:Weekday, index: number) => void;
  onChangeSlot: (selectedDay:Weekday, index: number, updatedSlot: TimeSlot) => void;
}

function ScheduleDayRow({daySchedule, onToggle, onAddSlot, onRemoveSlot, onChangeSlot }: ScheduleDayRowProps) {

  const isOpen = daySchedule.slots.length !== 0;

  return (
    <div className="flex items-start gap-x-4 px-5 py-3">

      {/* toggle + day */}
      <div className="flex items-center gap-x-3 w-36 shrink-0 h-10">

        <Switch.Root
          checked={isOpen}
          onCheckedChange={() => onToggle(daySchedule.day, isOpen)}
          className="w-10 h-5 shadow-inner bg-brand-grey/70 rounded-full relative data-[state=checked]:bg-accent transition-colors cursor-pointer outline-none shrink-0"
        >
          <Switch.Thumb className="block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-0.5 data-[state=checked]:translate-x-[22px] shadow-md" />
        </Switch.Root>

        <span className={`text-left font-medium truncate ${isOpen ? "text-brand-black" : "text-text-grey"}`}>
          {daySchedule.day}
        </span>
      </div>

      {/* shifts */}
      <div className="flex flex-col gap-y-2 flex-1">

        {isOpen
          ? daySchedule.slots.map((slot, index) => (
            <div key={index} className="flex items-center gap-x-3">

              {/* FROM TIME */}
              <TimeSelect
                value={slot.from}
                onChange={(newFrom) =>
                  onChangeSlot(daySchedule.day, index, { ...slot, from: newFrom })
                }
              />

              <span className="text-text-grey">–</span>

              {/* TO TIME */}
              <TimeSelect
                value={slot.to}
                onChange={(newTo) =>
                  onChangeSlot(daySchedule.day, index, { ...slot, to: newTo })
                }
              />

              {/* add/remove slots */}
              {
              index === 0
                ? <button
                    className="text-text-grey/70 cursor-pointer border-text-grey/70 border-2 p-[1px] rounded-full"
                    onClick={() => onAddSlot(daySchedule.day)}
                  >
                    <PlusIcon size={13}/>
                  </button>
                : <button
                    className="text-text-grey/70 cursor-pointer border-text-grey/70 border-2 p-[1px] rounded-full"
                    onClick={() => onRemoveSlot(daySchedule.day, index)}
                  >
                    <MinusIcon size={12} />
                  </button>
              }

            </div>))
          : <span className="h-10 flex items-center text-text-grey">Closed</span>
        }
      </div>

    </div>
  );
}

export default ScheduleDayRow;