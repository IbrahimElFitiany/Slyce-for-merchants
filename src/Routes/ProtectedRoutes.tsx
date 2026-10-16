import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function ProtectedRoutes() {

  const { isAuthenticated, isLoading } = useCurrentUser();

  if (isLoading) return null;

  if (!isAuthenticated) {
    return <Navigate to={`/login`} replace />;
  }

  return <Outlet />;
}