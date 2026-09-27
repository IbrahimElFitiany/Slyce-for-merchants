import useBranchesQuery from "@/hooks/useBranchesQuery";

function useBranchSelector(selectedBranchIds: string[], onSelectionChange: (ids: string[]) => void) {

  const {
    branches,
    isFetching,
    isError
  } = useBranchesQuery()

  const allBranchIds = branches?.map((b) => b.id) ?? [];
  const areAllSelected = allBranchIds.length > 0 && selectedBranchIds.length === allBranchIds.length;

  const handleCardClick = (branchId: string) => {
    const isSelected = selectedBranchIds.includes(branchId);
    const newSelection = isSelected
      ? selectedBranchIds.filter((id) => id !== branchId)
      : [...selectedBranchIds, branchId];

    onSelectionChange(newSelection);
  };

  const handleToggleAll = () => {
    if (areAllSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(allBranchIds);
    }
  };

  return {
    query: {isFetching, isError, branches },
    handleCardClick,
    handleToggleAll,
    allBranchIds,
    areAllSelected,
  }
}

export default useBranchSelector