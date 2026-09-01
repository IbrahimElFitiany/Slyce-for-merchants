import apiClient from "@/services/apiClient";
import type { GetBranchOrdersResponseDto } from "./ordersServices.dto";
import type { OrderSummary, Paginated } from "../types";


const toPaginatedOrderSummary = ( response: GetBranchOrdersResponseDto ): Paginated<OrderSummary> => {
  return {
    ...response,
    items: response.items.map((item) => {
      return {
        orderId: item.orderId,
        orderItemsCount: item.orderItemsCount,
        customerName: item.customerName,
        orderStatus: item.orderStatus,
        date: item.createdAt,
        subTotal: `${item.totalPrice.toFixed(2)}`,
      };
    }),
  };
};

export const getBranchOrders = async (page: number, pageSize: number, branchId: string): Promise<Paginated<OrderSummary>> => {

  const { data } = await apiClient.get<GetBranchOrdersResponseDto>(`orders/branch/${branchId}/`, { params: { page, pagesize: pageSize} });

  return toPaginatedOrderSummary(data);
};