import { useEffect } from "react";
import Drawer from "@/components/common/Drawer";
import CloseIcon from "@/components/icons/CloseIcon";
import type { WeeklySchedule } from "../../types.domain";
import BranchSelector from "./BranchSelector/BranchSelector";
import ScheduleDraftEditor from "./ScheduleDraftEditor/ScheduleDraftEditor";
import useScheduleDrawer from "../../hooks/useScheduleDrawer";
import { MoonLoader } from "react-spinners";


interface ScheduleDrawerProps {
  initialSchedule: WeeklySchedule;
  isOpen: boolean;
  onClose: () => void;
}

function ScheduleDrawer({ initialSchedule, isOpen, onClose}: ScheduleDrawerProps) {

  const {
    isPending,
    draft,
    setDraft,
    drawer:{view, setView, handleApply, handleCancel },
    selectedBranchIds,
    setSelectedBranchIds,
  } = useScheduleDrawer(initialSchedule, onClose)

  useEffect(() => {
    if (isOpen) {
      setDraft(initialSchedule);
      setView("schedule");
    }
  }, [isOpen, initialSchedule]);


  return (
    <Drawer className={"gap-y-8 w-[30%] py-5"} isOpen={isOpen} onClose={onClose}>

      <header className="py-3 flex flex-col gap-y-2 text-brand-black font-bold">

        <div className="text-3xl flex items-center justify-between">
          <h1>
            {(view === "schedule")
              ? (initialSchedule.length === 0) ? "Set schedule" : "Edit regular schedule"
              : "Select branch"
            }
          </h1>

          <button className="cursor-pointer rounded-full border-1 border-brand-grey p-2" onClick={onClose}>
            <CloseIcon size={20} />
          </button>
        </div>

        {
          (view === "schedule")
          ? <p className="text-text-grey font-medium mr-20">Customize your store schedule to keep your customers up to date.</p>
          : <p className="text-text-grey font-medium">Which branch should this schedule apply to?</p>
        }

      </header>

      {/* view tansition */}
      <div className="overflow-x-hidden">

        <div className={`flex w-[200%] transition-transform duration-300 ease-in-out ${view === "schedule" ? "translate-x-0" : "-translate-x-1/2"}`}>

          <ScheduleDraftEditor
            weeklyScheduleDraft={draft}
            onScheduleChange={setDraft}
          />

          <BranchSelector
            selectedBranchIds= {selectedBranchIds}
            onSelectionChange={setSelectedBranchIds}
          />

        </div>

      </div>

      <footer className="mt-auto sticky bottom-0 -mx-8 px-8 pt-4 bg-whitebg border-t border-brand-grey">

        <div className="flex gap-x-3">
          {view === "schedule"
          ? <>
              <button
                className="cursor-pointer flex-1 border border-brand-grey rounded-full py-2 font-bold hover:bg-brand-grey/10 transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                className="cursor-pointer flex-1 bg-accent text-white rounded-full py-2 font-bold hover:opacity-90 transition-opacity"
                onClick={() => setView("branches")}
              >
                Next
              </button>

            </>
          : <>
              <button className="cursor-pointer flex-1 border border-brand-grey rounded-full py-2 font-bold hover:bg-brand-grey/10 transition-colors" onClick={() => setView("schedule")}>
                Back
              </button>

              <button
                className="flex items-center justify-around cursor-pointer flex-1 bg-accent text-white rounded-full py-2 font-bold hover:opacity-90 transition-opacity"
                onClick={handleApply}
              >
               {isPending ? <MoonLoader size={14}/> :  "Apply"}
              </button>
            </>
          }

        </div>

      </footer>

    </Drawer>
  );

}

export default ScheduleDrawer;