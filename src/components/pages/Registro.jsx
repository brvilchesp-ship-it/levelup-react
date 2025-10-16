// src/components/pages/Registro.jsx
import React, { useState } from "react";

export default function Registro({ user, setUser, open, setOpen }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!nombre || !email || !edad || !password) {
      setMensaje("Completa todos los campos.");
      return;
    }

    if (Number(edad) < 18) {
      setMensaje("Debes ser mayor de 18 años para registrarte.");
      return;
    }

    let descuento = 0;
    if (email.endsWith("@duocuc.cl")) descuento = 20;

    const nuevoUsuario = { nombre, email, edad, password, descuento };
    setUser(nuevoUsuario);
    setMensaje(`¡Registro exitoso! ${descuento ? "Tienes 20% de descuento" : ""}`);
    setOpen(false);
    setNombre(""); setEmail(""); setEdad(""); setPassword("");
  };

  if (!open) return null; // no mostrar si está cerrado

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
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ marginBottom: "10px", padding: "8px", borderRadius: "6px" }} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "10px", padding: "8px", borderRadius: "6px" }} />
          <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} style={{ marginBottom: "10px", padding: "8px", borderRadius: "6px" }} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "10px", padding: "8px", borderRadius: "6px" }} />
          {mensaje && <p style={{ color: "yellow" }}>{mensaje}</p>}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit" className="btn btn-primary">Registrarse</button>
            <button type="button" className="btn" onClick={() => setOpen(false)}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
