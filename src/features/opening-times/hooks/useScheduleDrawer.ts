import { useState } from "react";
import type { WeeklySchedule } from "../types.domain";
import { isEqual } from "lodash-es";
import useScheduleMutation from "./useScheduleMutation";

type ViewState = "schedule" | "branches";

function useScheduleDrawer(initialSchedule:WeeklySchedule, onClose:()=>void) {

  const {
    updateScheduleAsync,
    isPending,
    isError,
    error
  } = useScheduleMutation()

  const [selectedBranchIds, setSelectedBranchIds] = useState<string[]>([]);
  const [draft, setDraft] = useState<WeeklySchedule>(initialSchedule);
  const [view, setView] = useState<ViewState>("schedule");

  const isScheduleDirty = !isEqual(initialSchedule, draft);

  const handleApply = async () => {

    try {

      if(!isScheduleDirty){
        return null
      }

      if(selectedBranchIds.length === 0){
        console.log("l2 walahy mynf34 ya basha 3ady 3lena bokra")
        return null;
      }
      await updateScheduleAsync({ branchIds: selectedBranchIds, newSchedule:draft });
      onClose()
    } catch (error) {
      console.error("Failed to update schedule:", error);
    }
  };

  const handleCancel = () => {
    setDraft(initialSchedule);
    setSelectedBranchIds([]);
    setView("schedule")
    onClose();
  }

  return {
    selectedBranchIds,
    setSelectedBranchIds,
    draft,
    setDraft,
    isPending,
    isError,
    error,
    drawer: {
      view,
      setView,
      handleCancel,
      handleApply,
    },
  }
}

export default useScheduleDrawer