import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
	isAuthenticated: boolean;
	isAdmin?: boolean;
	requireAdmin?: boolean;
}

export function ProtectedRoute({
	isAuthenticated,
	isAdmin = false,
	requireAdmin = false,
}: ProtectedRouteProps) {
	if (!isAuthenticated) {
		return <Navigate to="/auth" replace />;
	}

	if (requireAdmin && !isAdmin) {
		return <Navigate to="/app" replace />;
	}

	return <Outlet />;
}
