import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
    const [user, setUser] = useState(localStorage.getItem("user") || null);

    const handleLoginSuccess = (username) => {
        setUser(username);
        localStorage.setItem("user", username);
    };

    return (
        <BrowserRouter>
            <Routes>
                {!user ? (
                    <Route
                        path="*"
                        element={<Login onLoginSuccess={handleLoginSuccess} />}
                    />
                ) : (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
