import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StoreInitializer } from "./components/StoreInitializer";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 30 * 1000,
            refetchOnReconnect: true
        }
    }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <StoreInitializer>
                    <App />
                </StoreInitializer>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
