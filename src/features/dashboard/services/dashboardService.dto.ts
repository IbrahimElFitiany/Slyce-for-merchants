export interface GetBranchSummaryResponseDto {
  summary: {
    totalOrders: number;
    totalRevenue: number;
    currency: string;
  };
  chartData: Array<{
    label: string;
    orders: number;
  }>;
}