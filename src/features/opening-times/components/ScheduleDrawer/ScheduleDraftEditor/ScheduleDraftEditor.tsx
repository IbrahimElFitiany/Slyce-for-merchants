
import type { WeeklySchedule } from "@/features/opening-times/types.domain";
import ScheduleDayRow from "./ScheduleDayRow";
import useScheduleDraftEditor from "@/features/opening-times/hooks/useScheduleDraftEditor";

interface ScheduleDraftEditorProps {
  weeklyScheduleDraft: WeeklySchedule;
  onScheduleChange: (newSchedule: WeeklySchedule) => void;
}

function ScheduleDraftEditor({ weeklyScheduleDraft, onScheduleChange}: ScheduleDraftEditorProps) {

  const {
    handleToggle,
    handleAddSlot,
    handleRemoveSlot,
    handleChangeSlot
  } = useScheduleDraftEditor(weeklyScheduleDraft, onScheduleChange)


  return (
    <div className="w-1/2 h-fit border border-brand-grey rounded-xl divide-brand-grey divide-y-1">

      {
        weeklyScheduleDraft.map((day) =>
        <ScheduleDayRow
          key={day.day}
          daySchedule={day}
          onToggle={handleToggle}
          onAddSlot={handleAddSlot}
          onRemoveSlot={handleRemoveSlot}
          onChangeSlot={handleChangeSlot}
        />
        )
      }

    </div>
  );
}

export default ScheduleDraftEditor;