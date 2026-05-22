import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MenuManagementPage from "./pages/MenuManagementPage";

const LandingPage = lazy(() => import("@pages/LandingPage"));
const LoginPage = lazy(()=> import("@pages/LoginPage"));
const AddMenuItemPage = lazy(() => import("@/features/menu/pages/AddMenuItemPage"));


const Loader = <div>Loading...</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/landing" replace />
  },
  {
    path: "/landing",
    element: (
      <Suspense fallback={Loader}>
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: "/add-menu-item",
    element: (
      <Suspense fallback={Loader}>
        <MenuManagementPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={Loader}>
        <LoginPage/>
      </Suspense>
    ),
  },
]);
