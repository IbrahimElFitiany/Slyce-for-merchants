import useBranchSelector from "@/features/opening-times/hooks/useBranchSelector";
import BranchCard from "./BranchCard";

interface BranchSelectorProps {
  selectedBranchIds: string[];
  onSelectionChange: (ids: string[]) => void;
}

function BranchSelector({ selectedBranchIds, onSelectionChange }: BranchSelectorProps) {

  const {
    query:{
      isFetching,
      isError,
      branches
    },
    handleCardClick,
    handleToggleAll,
    allBranchIds,
    areAllSelected
  } = useBranchSelector(selectedBranchIds, onSelectionChange )

  if (isFetching)
    (<div className="w-1/2 h-full text-text-grey">Loading branches...</div>)

  if (isError)
    (<div className="w-1/2 h-full text-red-500">Failed to load branches.</div>)

  return (
    <div className="w-1/2 px-0.5">

      <div className="flex flex-col items-start justify-around gap-y-4">

        <div className="w-full flex flex-col gap-y-2">

          {branches?.map((branch) => (

            <BranchCard
              key={branch.id}
              id={branch.id}
              name={branch.name}
              location={branch.location}
              isSelected={selectedBranchIds.includes(branch.id)}
              onSelect={() => handleCardClick(branch.id)}
            />
          ))}

        </div>

        <button
          type="button"
          disabled={allBranchIds.length === 0}
          className="text-sm font-bold bg-accent px-2 py-1 rounded-full text-whitebg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleToggleAll}
        >
          {areAllSelected ? "Clear all" : "Select all"}
        </button>

      </div>

    </div>
  );
}

export default BranchSelector;