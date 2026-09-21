import { useState } from "react";
import EditScheduleDrawer from "./components/EditScheduleDrawer";
import { GetBranchWorkingHours, UpdateBranchWorkingHours } from "./services/openingTimesServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { OperationHours } from "./types.domain";


function OpeningTimesPage() {
  const [isEditScheduleDrawerOpen, setIsEditScheduleDrawerOpen] = useState<boolean>(false);

  const { data, isPending } = useQuery({
    queryKey: ["hours"],
    queryFn: () => GetBranchWorkingHours("s")
  });

  const { mutate } = useMutation({
    mutationFn: ({branchIds, newSchedule} : UpdateBranchsOperatingHoursVariables) => UpdateBranchWorkingHours(branchIds, newSchedule )
  });

  const schedule = data ?? [];

  const handleScheduleUpdate = (branchIds: string[], updatedSchedule: OperationHours[]) => {
    mutate({branchIds: branchIds, newSchedule: updatedSchedule});
    setIsEditScheduleDrawerOpen(false)
  };

  return (
    <>
      <title>{`Slyce · Opening Times`}</title>

      <div className="flex flex-col max-w-2xl mt-10 gap-y-5">

        <header className="flex justify-between items-center text-2xl text-brand-black font-bold">
          <h1>Regular schedule</h1>

          <button
            onClick={() => setIsEditScheduleDrawerOpen(true)}
            disabled={isPending}
            className="cursor-pointer flex text-base items-center gap-x-1.5 px-4 py-1.5 border border-brand-grey rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Edit
          </button>
        </header>

        {isPending
        ? <ScheduleSkeleton/>
        : <div className="border border-brand-grey rounded-2xl divide-y divide-brand-grey">
            {
              schedule.map((item) => (
                <div key={item.day} className="flex justify-between p-4 text-md font-semibold text-brand-black">

                  <span>{item.day}</span>

                  <div className="text-right flex flex-col gap-y-1">

                    {item.slots === null

                      ? <span className="text-text-grey font-normal">Closed</span>
                      : <span className="text-text-grey tabular-nums">
                          {item.slots.from} - {item.slots.to}
                        </span>
                    }

                  </div>

                </div>
              ))
            }
          </div>
        }

      </div>

      <EditScheduleDrawer
        scheduleDraft={schedule}
        isOpen={isEditScheduleDrawerOpen}
        onClose={() => setIsEditScheduleDrawerOpen(false)}
        onApply={handleScheduleUpdate} />
    </>
  );
}

function ScheduleSkeleton() {
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

export default OpeningTimesPage;


interface UpdateBranchsOperatingHoursVariables {
  branchIds: string [];
  newSchedule: OperationHours[]
}