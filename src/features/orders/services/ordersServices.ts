import apiClient from "@/services/apiClient";
import type { GetBranchOrdersResponseDto, OrderDetailsDto } from "./ordersServices.dto";
import type { OrderDetails, OrderStatus, OrderSummary } from "../types.domain";
import type { Paginated } from "@/types.domain";
import { mapToOrderStatus, mapToServerStatus } from "@/features/orders/services/status-mapper";

const toPaginatedOrderSummary = ( response: GetBranchOrdersResponseDto ): Paginated<OrderSummary> => {
  return {
    ...response,
    items: response.items.map((item) => {
      return {
        orderId: item.orderId,
        orderItemsCount: item.orderItemsCount,
        customerName: item.customerName,
        orderStatus: mapToOrderStatus(item.orderStatus),
        branchName: item.branchName,
        date: item.createdAt,
        subTotal: `${item.totalPrice.toFixed(2)}`,
      };
    }),
  };
};

export const getOrders = async (page: number, pageSize: number, orderStatus?:OrderStatus, branchId?: string): Promise<Paginated<OrderSummary>> => {

  const { data:orders } = await apiClient.get<GetBranchOrdersResponseDto>(
    `orders`,
    { params: {
        page,
        pagesize: pageSize,
        branchId,
        orderStatus: orderStatus && mapToServerStatus(orderStatus),

      }
    }
  );

  return toPaginatedOrderSummary(orders);
};


function mapToOrderDetailsDomainType(dto: OrderDetailsDto): OrderDetails {
  return {
    orderId: dto.orderId,
    customerName: dto.customerName,
    branchName: dto.branchName,
    orderDate: dto.orderDate,
    orderStatus: mapToOrderStatus(dto.orderStatus),
    statusHistory: dto.statusHistory.map((s) => ({
      status: mapToOrderStatus(s.status),
      timestamp: s.time,
    })),
    orderItems: dto.orderItems,
    orderSummary: dto.orderSummary,
  };
}

export const getOrderDetails = async (orderId: string): Promise<OrderDetails> => {
  const res = await apiClient.get<OrderDetailsDto>(`/orders/${orderId}`);
  return mapToOrderDetailsDomainType(res.data);
};