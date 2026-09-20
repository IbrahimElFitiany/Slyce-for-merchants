import { getRestaurantBranches } from "@/services/branchesService"
import { useQuery } from "@tanstack/react-query"

function useBranchesQuery() {

  const {data:branches, isPending, isFetching, isError} = useQuery({
    queryKey: ['branches'],
    queryFn: getRestaurantBranches,
    staleTime: Infinity
  })

  return {
    branches,
    isPending,
    isFetching,
    isError
  }
}

export default useBranchesQuery