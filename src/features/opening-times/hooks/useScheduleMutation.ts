import { useMutation } from "@tanstack/react-query";
import { UpdateBranchSchedule } from "../services/openingTimesServices";
import type { WeeklySchedule } from "../types.domain";

export interface UpdateScheduleArgs {
  branchIds: string[];
  newSchedule: WeeklySchedule;
}

export function useScheduleMutation() {

  const mutation = useMutation({
    mutationFn: ({ branchIds, newSchedule }: UpdateScheduleArgs) => UpdateBranchSchedule(branchIds, newSchedule),
  });

  return {
    updateSchedule: mutation.mutate,
    updateScheduleAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
}

export default useScheduleMutation;