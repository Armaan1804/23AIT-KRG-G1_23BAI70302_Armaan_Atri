import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { AuthProvider } from "./AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                   <Route path="/login" element={<Login />} />
                   <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;