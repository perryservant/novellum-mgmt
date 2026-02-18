import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />

            {/* Protected routes with sidebar layout */}
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <AppLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
