import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Tu wysyłamy dane do backendu w celu weryfikacji
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // np. zapis tokenu w localStorage
            localStorage.setItem("token", "mockToken");
            navigate("/admin/panel");
        } else {
            alert("Błędne dane logowania");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Logowanie</h2>
            <input type="text" placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Zaloguj się</button>
        </form>
    );
};

export default Login;
