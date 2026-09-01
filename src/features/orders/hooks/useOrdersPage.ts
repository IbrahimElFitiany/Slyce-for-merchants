import { useState } from "react";
import useOrdersQuery from "./useOrdersQuery";

function useOrdersPage() {

  const [pageNumber, setPageNumber] = useState(1);
  const [perPageSize, setPerPageSize] = useState(20);

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const {
    totalOrders,
    pageSize,
    currentPage,
    totalPages,
    hasNext,
    hasPrevious,
    orders,
    isPending,
    isFetching,
    isError,
    refetch
  } = useOrdersQuery(pageNumber, perPageSize);

  const goToNextPage = () => setPageNumber((prev) => Math.min(totalPages ?? 1, prev + 1));
  const goToPrevPage = () => setPageNumber((prev) => Math.max(1, prev - 1));

  const openOrder = (orderId: string) => setSelectedOrderId(orderId);
  const closeOrder = () => setSelectedOrderId(null);

  const handleSetPerPageSize = (newSize: number) => {
    setPerPageSize(newSize);
    setPageNumber(1);
  };

  return {
    totalOrders,
    pageSize,
    currentPage,
    totalPages,
    hasNext,
    hasPrevious,
    orders,
    isPending,
    isFetching,
    isError,
    refetch,
    setPageNumber,
    setPerPageSize: handleSetPerPageSize,
    goToNextPage,
    goToPrevPage,
    selectedOrderId,
    isDrawerOpen: selectedOrderId !== null,
    openOrder,
    closeOrder,
  };
}

export default useOrdersPage;