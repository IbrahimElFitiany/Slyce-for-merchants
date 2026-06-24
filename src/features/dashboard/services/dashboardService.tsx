import apiClient from "@/services/apiClient";

export interface OrdersTrend {
  date: string;
  count: number;
  revenue: number;
}

export interface LiveOrder {
  id: string;
  customerName: string;
  status: "Pending" | "Preparing" | "Ready" | "Delivered";
  placedAt: string;
  total: number;
}

export interface DashboardSummary {
  totalOrdersToday: number;
  revenueToday: number;
  activeOrders: number;
  averageOrderValue: number;
}

export const dashboardService = {
  getSummary: (restaurantId: string) =>
    apiClient
      .get<DashboardSummary>(`/restaurants/${restaurantId}/dashboard/summary`)
      .then((r) => r.data),

  getOrdersTrend: (restaurantId: string, days: number = 7) =>
    apiClient
      .get<OrdersTrend[]>(`/restaurants/${restaurantId}/dashboard/orders-trend`, {
        params: { days },
      })
      .then((r) => r.data),

  getLiveOrders: (restaurantId: string) =>
    apiClient
      .get<LiveOrder[]>(`/restaurants/${restaurantId}/dashboard/live-orders`)
      .then((r) => r.data),
};