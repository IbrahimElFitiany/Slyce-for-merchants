import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getBranchOrders } from "../services/ordersServices";

function useOrdersQuery(pageNumber: number, perPageSize: number) {

  const { data, isPending, isFetching, isError, refetch} = useQuery({
    queryKey: ["branch", "orders", pageNumber, perPageSize],
    queryFn: () => getBranchOrders(pageNumber, perPageSize, "gfkjdfkj"),
    placeholderData: keepPreviousData,
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