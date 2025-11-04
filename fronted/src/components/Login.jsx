import React, { useState } from "react";
import api from "../services/api";

export default function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {


            // 🔹 Si ya tienes backend, descomenta:
             const res = await api.post("/auth/login", { username, password });
             if (res.data?.token) {
               localStorage.setItem("token", res.data.token);
               onLoginSuccess(username);
             } else {
               setError("Credenciales inválidas");
             }

        } catch (err) {
            console.error("Error al iniciar sesión:", err);
            setError("Error de conexión o credenciales inválidas");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800">
            <div className="login-card text-white">
                <h2 className="login-title">EV POS</h2>
                <p className="text-center text-gray-300 mb-6">Acceso administrativo</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                        required
                    />

                    {error && (
                        <p className="text-red-400 text-sm text-center mt-2">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="login-btn mt-4"
                    >
                        {loading ? "Entrando..." : "Iniciar sesión"}
                    </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    © 2025 EV Systems
                </p>
            </div>
        </div>
    );
}
