import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";

export const AppLayout = () => {
    return (
        <div className="h-screen w-screen py-3 px-3 bg-gradient-to-b from-blue-300 via-neutral-800 via-80% to-neutral-900">
            <AppHeader />
            <div className="h-full w-full">
                <Outlet />
            </div>
        </div>
    );
};
