import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, isLoading, isInitialized } = useAuthStore();

    // Show loading while auth is being initialized
    if (isLoading || !isInitialized) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-sm">Loading...</div>
            </div>
        );
    }

    // Only redirect to login if auth is initialized AND user is not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};
