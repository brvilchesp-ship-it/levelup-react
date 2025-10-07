import React from 'react'

export default function Header() {
  return (
  <header>
    <div className="container nav">
      <div className="brand">
        <img src="/img/logo.jpg" alt="Imagen" className="logo"/>
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
        <button id="login" className="btn">Ingresar</button>
        <button id="register" className="btn btn-primary">Crear cuenta</button>
        <button id="perfilBtn" className="btn" style={{display:"none"}}>Perfil</button>
        <button id="logoutBtn" className="btn" style={{display:"none"}}>Salir</button>
        <button id="cart-btn" className="btn btn-cart">🛒 Carrito <span id="cart-count">0</span></button>
      </div>
    </div>
  </header>
  )
}
