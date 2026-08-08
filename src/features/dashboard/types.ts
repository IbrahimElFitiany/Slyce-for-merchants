export interface OrdersTrendSummary {
  totalOrders: number;
  totalRevenue: number;
  currency: string;
  chartData: { label: string; orders: number }[];
}