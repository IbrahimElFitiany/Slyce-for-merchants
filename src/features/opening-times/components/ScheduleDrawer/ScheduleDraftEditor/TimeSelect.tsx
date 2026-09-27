import * as Popover from "@radix-ui/react-popover";
import { useEffect, useRef, useState } from "react";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import type { TimeSlot } from "@/features/opening-times/types.domain";
import { formatTimeSlot } from "@/utils/formatters";

const HOURS_12 = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
const MINUTES = ["00", "15", "30", "45"];
const PERIODS = ["AM", "PM"];
const ITEM_HEIGHT = 36;

function parse24To12(val24: string) {
  const [hStr, mStr] = val24.split(":");
  let h = parseInt(hStr || "0", 10);
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return { hour: String(h).padStart(2, "0"), minute: mStr || "00", period };
}

function format12To24(h12: string, min: string, period: string) {
  let h = parseInt(h12, 10);
  if (period === "PM" && h < 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${min}`;
}

interface TimeSelectProps {
  value: TimeSlot["from"];
  onChange: (value: string) => void;
}

export function TimeSelect({ value, onChange }: TimeSelectProps) {
  const initial = parse24To12(value);

  const [draftHour, setDraftHour] = useState(initial.hour);
  const [draftMinute, setDraftMinute] = useState(initial.minute);
  const [draftPeriod, setDraftPeriod] = useState(initial.period);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      const { hour, minute, period } = parse24To12(value);
      setDraftHour(hour);
      setDraftMinute(minute);
      setDraftPeriod(period);
    }
  };

  const handleDone = () => {
    onChange(format12To24(draftHour, draftMinute, draftPeriod));
  };

  return (
    <Popover.Root onOpenChange={handleOpenChange}>

      <Popover.Trigger asChild>
        <button
          className="group duration-200 flex flex-1 h-10 items-center justify-between px-3 rounded-lg bg-brand-grey/40 font-normal tabular-nums cursor-pointer hover:bg-brand-grey/50 transition-colors outline-none"
        >
          <span>{formatTimeSlot(value)}</span>

          <ChevronIcon
            size={12}
            direction="down"
            className="transition-transform duration-200 group-data-[state=open]:rotate-270"
          />

        </button>

      </Popover.Trigger>

      <Popover.Portal>

        <Popover.Content
          sideOffset={6}
          side="bottom"
          align="end"
          className="z-[110] flex flex-col items-center gap-y-4 bg-whitebg border border-brand-grey rounded-2xl shadow-xl p-4
          data-[state=open]:animate-in
          data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
          data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95
          duration-200 select-none"
        >
          <span className="font-semibold text-brand-black text-base">Select time</span>

          <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
            <div className="absolute inset-x-1 h-[36px] top-[72px] border border-brand-grey/80 rounded-lg pointer-events-none z-0" />

            <div className="flex items-center justify-center z-10">

              <TimeColumn
                options={HOURS_12}
                selected={draftHour}
                onSelect={setDraftHour}
              />

              <span className="font-bold text-brand-black px-1.5 self-center select-none text-base">:</span>

              <TimeColumn
                options={MINUTES}
                selected={draftMinute}
                onSelect={setDraftMinute}
              />

              <div className="w-2" />

              <TimeColumn
                options={PERIODS}
                selected={draftPeriod}
                onSelect={setDraftPeriod}
              />
            </div>
          </div>

          <div className="flex justify-between w-full gap-x-2 pt-1">

            <Popover.Close
              className="w-full duration-300 ring-1 ring-transparent hover:ring-brand-grey font-semibold p-1.5 px-2 rounded-lg cursor-pointer outline-none text-brand-black text-center text-sm"
            >
              Cancel
            </Popover.Close>

            <Popover.Close asChild>
              <button
                onClick={handleDone}
                className="w-full transition-all duration-300 bg-accent text-whitebg hover:opacity-90 font-semibold p-1.5 px-2 rounded-lg cursor-pointer outline-none text-center text-sm"
              >
                Done
              </button>
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function TimeColumn({ options, selected, onSelect }: { options: string[]; selected: string; onSelect: (val: string) => void }) {

  const ref = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const index = Math.max(0, options.indexOf(selected));
    el.scrollTo({ top: index * ITEM_HEIGHT, behavior: "auto" });
  }, [selected, options]);

  const handleScroll = () => {
    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    scrollTimer.current = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const index = Math.round(el.scrollTop / ITEM_HEIGHT);
      const clamped = Math.max(0, Math.min(index, options.length - 1));
      const value = options[clamped];
      if (value && value !== selected) onSelect(value);
    }, 100);
  };

  return (
    <div
      ref={ref}
      onScroll={handleScroll}
      className="h-[180px] w-12 overflow-y-auto flex flex-col items-center py-[72px] no-scrollbar select-none"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {options.map((opt) => {
        const isSelected = opt === selected;
        return (
          <div
            key={opt}
            onClick={() => onSelect(opt)}
            style={{ scrollSnapAlign: "center" }}
            className={`h-[36px] min-h-[36px] w-full flex items-center justify-center cursor-pointer transition-all duration-150 text-sm font-medium
              ${isSelected ? "text-brand-black font-bold text-base scale-105" : "text-brand-black/40 hover:text-brand-black"}`}
          >
            {opt}
          </div>
        );
      })}
    </div>
  );
}

export default TimeSelect;