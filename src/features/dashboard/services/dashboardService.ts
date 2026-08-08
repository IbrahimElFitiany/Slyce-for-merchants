import apiClient from "@/services/apiClient";
import type { GetBranchSummaryResponseDto } from "./dashboardService.dto";
import type { OrdersTrendSummary } from "../types";


function mapToOrdersTrendSummary(dto: GetBranchSummaryResponseDto): OrdersTrendSummary {
  return {
    totalOrders: dto.summary.totalOrders,
    totalRevenue: dto.summary.totalRevenue,
    currency: dto.summary.currency,
    chartData: dto.chartData.map(d => ({ label: d.label, orders: d.orders })),
  };
}

export async function getOrdersTrend(branchId: string, period: string): Promise<OrdersTrendSummary> {
  const response = await apiClient.get<GetBranchSummaryResponseDto>(
    `orders/branch/${branchId}/summary?period=${period}`
  );
  return mapToOrdersTrendSummary(response.data);
}