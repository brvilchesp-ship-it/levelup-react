// src/components/pages/Login.jsx
import React, { useState } from "react";

export default function Login({ user, setUser, open, setOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setMensaje("Usuario o contraseña incorrectos.");
      return;
    }

    setUser(storedUser);
    setMensaje("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#22232a",
          color: "#fff",
          padding: "20px",
          borderRadius: "12px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h2>Ingresar</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px", padding: "8px", borderRadius: "6px" }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "10px", padding: "8px", borderRadius: "6px" }}
          />
          {mensaje && <p style={{ color: "yellow" }}>{mensaje}</p>}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit" className="btn btn-primary">Ingresar</button>
            <button type="button" className="btn" onClick={() => setOpen(false)}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
