import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes() {

  const { isAuthenticated, isLoading } = useCurrentUser();

  if (isLoading) return null;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace/>;
  }

  return <Outlet />;
}