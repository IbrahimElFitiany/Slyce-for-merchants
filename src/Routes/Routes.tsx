import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import NotFound from "@/components/ui/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import GuestRoutes from "./GuestRoutes";

import OrdersPage from "@/features/orders/OrdersPage";
import PerformancePage from "@/features/Performance/PerformancePage";
import ReviewsPage from "@/features/Reviews/ReviewsPage";
import PaymentPage from "@/features/payment/PaymentPage";
import PromotionsPage from "@/features/promotions/PromotionsPage";
import OpeningTimesPage from "@/features/opening-times/OpeningTimesPage";
import LandingPage from "@/features/landing/LandingPage";
import LoginPage from "@/features/auth/Pages/LoginPage";
import Dashboard from "@/features/dashboard/DashboardPage";
import MenuManagementPage from "@/features/menu/MenuManagementPage";
import SettingsPage from "@/features/Settings/SettingsPage";
import ForgotPasswordPage from "@/features/auth/Pages/ForgotPasswordPage";

export const router = createBrowserRouter(
  [
    {
      id: "Guests only routes",
      element: <GuestRoutes />,
      children: [
        { path: "/", element: <Navigate to="/landing" replace /> },
        { path: "/landing", element: <LandingPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/reset-password", element: <ForgotPasswordPage /> },
      ]
    },
    {
      id: "Protected routes",
      element: <ProtectedRoutes />,
      children: [
        {
          element: <Layout />,
          children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/menu", element: <MenuManagementPage /> },
            { path: "/orders", element: <OrdersPage /> },
            { path: "/performance", element: <PerformancePage /> },
            { path: "/reviews", element: <ReviewsPage /> },
            { path: "/promotions", element: <PromotionsPage /> },
            { path: "/payments", element: <PaymentPage /> },
            { path: "/opening-times", element: <OpeningTimesPage /> },
            { path: "/settings", element: <SettingsPage /> },
          ],
        },
      ],
    },
    { path: "*", element: <NotFound/> }
  ]
);