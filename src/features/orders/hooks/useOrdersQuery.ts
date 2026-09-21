import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/ordersServices";
import { useBranchContext } from "@/context/BranchContext";
import type { OrderStatus } from "../types.domain";

function useOrdersQuery(pageNumber: number, perPageSize: number, orderStatus?:OrderStatus) {

  const { selectedBranch } = useBranchContext();

  const { data, isPending, isFetching, isError, refetch} = useQuery({
    queryKey: ["orders", { pageNumber, perPageSize, branchId: selectedBranch?.id, orderStatus }],
    queryFn: () => getOrders(pageNumber, perPageSize, orderStatus, selectedBranch?.id),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false
  });

  return {
    totalOrders: data?.total ?? 0,
    serverPageSize: data?.perPage ?? perPageSize,
    pageSize: perPageSize,
    currentPage: data?.currentPage ?? pageNumber,
    totalPages: data?.totalPages ?? 1,
    hasNext: data?.hasNext ?? false,
    hasPrevious: data?.hasPrevious ?? false,
    orders: data?.items ?? [],
    isPending,
    isFetching,
    isError,
    refetch
  };
}

export default useOrdersQuery;