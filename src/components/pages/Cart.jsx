import React from "react";

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2>🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.qty} - ${item.price * item.qty}
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toLocaleString()}</h3>
      {cart.length > 0 && <button className="btn btn-primary">Pagar</button>}
    </div>
  );
}
