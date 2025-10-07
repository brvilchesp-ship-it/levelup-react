import React from 'react'

export default function Cart() {
  return (
      <div id="cart-panel" className="cart-panel">
    <h3>🛒 Carrito</h3>
    <ul id="cart-items"></ul>
    <div className="cart-footer">
      <span>Total: $<span id="cart-total">0</span></span>
      <button className="btn btn-primary" id="pay-btn">Pagar</button>
    </div>
    <p id="payment-message"></p>
  </div>
  )
}
