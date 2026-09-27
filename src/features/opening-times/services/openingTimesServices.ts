import apiClient from "@/services/apiClient";
import type { WeeklySchedule } from "../types.domain";


interface GetBranchWorkingHoursResponseDto{
  schedule: WeeklySchedule;
}

export async function GetBranchSchedule(branchId:string) : Promise<WeeklySchedule>{

  const res = await apiClient.get<GetBranchWorkingHoursResponseDto>(`/branches/${branchId}/opening-hours`)

  return res.data.schedule;
}



interface UpdateBranchesSchedulePayload {
  branchIds: string[];
  schedule: WeeklySchedule;
}

export async function UpdateBranchSchedule(branchIds:string[], newSchedule: WeeklySchedule) : Promise<void>
{
  await apiClient.patch(`/branches/opening-hours`, {
    branchIds,
    schedule: newSchedule,
  } satisfies UpdateBranchesSchedulePayload )

}