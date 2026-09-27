import { useQuery } from "@tanstack/react-query";
import { GetBranchSchedule } from "../services/openingTimesServices";
import { useBranchContext } from "@/context/BranchContext";
import { useState } from "react";
import type { WeeklySchedule } from "../types.domain";

function useScheduleQuery() {

  const {selectedBranch} = useBranchContext();
  const [scheduleDraft, setScheduleDraft] = useState<WeeklySchedule | null>()

  const { data:schedule , isPending } = useQuery({
    queryKey: ["schedule",{branchId: selectedBranch?.id}],
    queryFn: () => GetBranchSchedule(selectedBranch!.id),
    enabled: Boolean(selectedBranch?.id),
  });

  return {
    schedule,
    scheduleDraft,
    setScheduleDraft,
    selectedBranch,
    states:{isPending}

  }
}

export default useScheduleQuery