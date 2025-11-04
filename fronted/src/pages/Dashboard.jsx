import React from "react";

export default function Dashboard() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(); // vuelve al login
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            <h1 className="text-3xl font-bold text-green-700 mb-4">
                Bienvenido al POS
            </h1>
            <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
                Cerrar sesión
            </button>
        </div>
    );
}
