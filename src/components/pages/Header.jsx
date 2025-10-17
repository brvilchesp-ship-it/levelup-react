import React, { useEffect, useState } from "react";
import CartButton from "./CartButton";

export default function Header({ cart, setCart, user, setUser, setRegistroOpen, setLoginOpen }) {
  const [logged, setLogged] = useState(!!user);
  const [perfilOpen, setPerfilOpen] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(user?.name || "");

  useEffect(() => {
    setLogged(!!user);
    setNuevoNombre(user?.name || "");
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLogged(false);
  };

  const handleSavePerfil = () => {
    const updatedUser = { ...user, name: nuevoNombre };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setPerfilOpen(false);
  };

  return (
    <header data-testid="header">
      <div className="container nav">
        <div className="brand">
          <img src="/img/logo.jpg" alt="Logo" className="logo" />
          <div>
            <div className="brand-title">LEVEL-UP GAMER</div>
            <small className="muted">Desafía tus límites</small>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#catalogo">Catálogo</a>
          <a href="#puntos">Puntos</a>
        </nav>
        <div className="nav-actions">
          {!logged && (
            <button
              id="loginBtn"
              className="btn"
              onClick={() => setLoginOpen(true)}
            >
              Ingresar
            </button>
          )}
          {!logged && (
            <button
              id="registerBtn"
              className="btn btn-primary"
              onClick={() => setRegistroOpen(true)}
            >
              Crear cuenta
            </button>
          )}
          {logged && (
            <>
              <button
                className="btn btn-primary"
                onClick={() => setPerfilOpen(true)}
              >
                Perfil
              </button>
              <button id="logoutBtn" className="btn" onClick={handleLogout}>
                Salir
              </button>
            </>
          )}
          <CartButton cart={cart} setCart={setCart} />
        </div>
      </div>

      {/* Modal de perfil */}
      {perfilOpen && (
        <div
          data-testid="perfil-modal"
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
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
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h2>Perfil de usuario</h2>
            <label>
              Nombre:
              <input
                type="text"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
                style={{
                  width: "100%",
                  padding: "6px",
                  marginTop: "4px",
                  color: "#fff",
                  background: "#333",
                  border: "none",
                  borderRadius: "4px"
                }}
              />
            </label>
            <label>
              Correo:
              <input
                type="text"
                value={user.email}
                disabled
                style={{
                  width: "100%",
                  padding: "6px",
                  marginTop: "4px",
                  color: "#fff",
                  background: "#333",
                  border: "none",
                  borderRadius: "4px"
                }}
              />
            </label>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button className="btn" onClick={() => setPerfilOpen(false)}>
                Cerrar
              </button>
              <button className="btn btn-primary" onClick={handleSavePerfil}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
