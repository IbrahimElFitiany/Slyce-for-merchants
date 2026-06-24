import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import PageLoader from "@/components/ui/PageLoader";
import NotFound from "@/components/ui/NotFound";

const OpeningTimesPage = lazy(() => import("@/features/opening-times/openingTimesPage"));
const LandingPage = lazy(() => import("@/features/landing/LandingPage"));
const LoginPage = lazy(() => import("@/features/auth/LoginPage"));
const Dashboard = lazy(() => import("@/features/dashboard/DashboardPage"));
const MenuManagementPage = lazy(() => import("@/features/menu/MenuManagementPage"));


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/landing" replace />,
    },
    {
      path: "/landing",
      element:
        <Suspense fallback={<PageLoader/>}>
          <LandingPage />
        </Suspense>,
    },
    {
      path: "/login",
      element:
        <Suspense fallback={<PageLoader/>}>
          <LoginPage />
        </Suspense>,
    },
    {
      element: (
        <Suspense fallback={<PageLoader/>}>
          <Layout/>
        </Suspense>
      ),
      children: [
        {path: "/opening-times", element: <OpeningTimesPage/>},
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/menu",      element: <MenuManagementPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]
);