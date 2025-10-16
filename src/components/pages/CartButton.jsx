// src/components/pages/CartButton.jsx
import React, { useState, useEffect } from 'react';
import Cart from './Cart';

export default function CartButton({ cart, setCart }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(storedCart.reduce((sum, item) => sum + item.qty, 0));
  }, []);

  useEffect(() => {
    setCartCount(cart.reduce((sum, item) => sum + item.qty, 0));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleCart = () => {
    setCartOpen(prev => {
      const panel = document.getElementById('cart-panel');
      if (panel) panel.style.display = !prev ? 'flex' : 'none';
      return !prev;
    });
  };

  return (
    <>
      <button className="btn btn-cart" onClick={toggleCart}>
        🛒 Carrito <span id="cart-count">{cartCount}</span>
      </button>

      <div
        id="cart-panel"
        style={{
          display: 'none',
          position: 'fixed',
          top: 60,
          right: 20,
          width: '350px',
          maxHeight: '70vh',
          background: '#22232a',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          borderRadius: '12px',
          padding: '16px',
          flexDirection: 'column',
          overflowY: 'auto',
          zIndex: 1000,
        }}
      >
        <Cart cart={cart} setCart={setCart} darkMode />
        <button
          style={{ marginTop: '10px', alignSelf: 'flex-end' }}
          className="btn"
          onClick={toggleCart}
        >
          Cerrar
        </button>
      </div>
    </>
  );
}
