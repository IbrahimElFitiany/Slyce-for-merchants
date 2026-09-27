import ScheduleDrawer from "./components/ScheduleDrawer/ScheduleDrawer";
import useScheduleQuery from "./hooks/useScheduleQuery";
import Schedule, { ScheduleSkeleton } from "./components/Schedule";

function OpeningTimesPage() {

  const {
    schedule,
    scheduleDraft,
    setScheduleDraft,
    selectedBranch,
    states:{isPending},
  } = useScheduleQuery()

  if (selectedBranch === null) return <BranchWarning/>

  return (
    <>
      <title>{`Slyce · Opening Times`}</title>

      <div className="flex flex-col max-w-2xl mt-10 gap-y-5">

        <header className="flex justify-between items-center text-2xl text-brand-black font-bold">

          <h1>Regular schedule</h1>

          <button
            onClick={()=> setScheduleDraft(schedule)}
            disabled={isPending}
            className={`cursor-pointer flex text-base items-center gap-x-1.5 px-4 py-1.5 border border-brand-grey rounded-full font-semibold
            disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Edit
          </button>

        </header>

        {isPending ? <ScheduleSkeleton/> : <Schedule schedule={schedule ?? []} />}

      </div>

      <ScheduleDrawer
        initialSchedule={scheduleDraft ?? []}
        isOpen={Boolean(scheduleDraft)}
        onClose={() => setScheduleDraft(null)}
      />

    </>
  );
}

export default OpeningTimesPage;


function BranchWarning(){
  return (
    <div className="flex items-center justify-around h-90 w-[40%] max-w-2xl mt-10 border border-brand-grey rounded-2xl divide-y">
      Please select a branch from the header
    </div>
  );
}