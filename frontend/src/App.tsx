import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protected routes with sidebar layout */}
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
