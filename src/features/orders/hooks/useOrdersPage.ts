import { useState } from "react";
import useOrdersQuery from "./useOrdersQuery";
import type { OrderStatus } from "../types.domain";

function useOrdersPage() {

  const [pageNumber, setPageNumber] = useState(1);
  const [perPageSize, setPerPageSize] = useState(20);
  const [orderStatusFilter, setOrderStatusFilter] = useState<OrderStatus>()
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
  } = useOrdersQuery(pageNumber, perPageSize, orderStatusFilter);

  const selectedOrder = orders?.find((order) => order.orderId === selectedOrderId);
  const showingFrom = totalOrders === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const showingTo = Math.min(currentPage * pageSize, totalOrders);

  const goToNextPage = () => setPageNumber((prev) => Math.min(totalPages ?? 1, prev + 1));
  const goToPrevPage = () => setPageNumber((prev) => Math.max(1, prev - 1));

  const handleSetPerPageSize = (newSize: number) => {
    setPerPageSize(newSize);
    setPageNumber(1);
  };

  const handleSetStatus = (s?: OrderStatus) => {
    setOrderStatusFilter(s);
    setPageNumber(1);
  };

  return {
    orders,
    selectedOrder,
    status:{ isPending, isFetching, isError, refetch },
    filter: { orderStatusFilter, setOrderStatusFilter: handleSetStatus },
    pagination: {
      currentPage,
      pageSize,
      totalPages,
      totalOrders,
      hasNext,
      hasPrevious,
      showingFrom,
      showingTo,
      setPageNumber,
      setPerPageSize: handleSetPerPageSize,
      goToNextPage,
      goToPrevPage,
    },
    drawer: { selectedOrderId, setSelectedOrderId },
  };
}

export default useOrdersPage;