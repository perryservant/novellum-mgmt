import { useEffect } from "react";
import type { ReactNode } from "react";
import { useAuthStore } from "../stores/authStore";

interface StoreInitializerProps {
    children: ReactNode;
}

export const StoreInitializer = ({ children }: StoreInitializerProps) => {
    const initializeAuth = useAuthStore((state) => state.initialize);
    const isLoading = useAuthStore((state) => state.isLoading);

    useEffect(() => {
        initializeAuth();
    }, [initializeAuth]);

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-sm">Loading...</div>
            </div>
        );
    }

    return <>{children}</>;
};
