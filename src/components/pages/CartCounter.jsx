import React from "react";

export default function CartCounter({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      background: '#fff',
      padding: '8px 12px',
      borderRadius: '8px',
      boxShadow: '0 0 5px rgba(0,0,0,0.3)',
      fontWeight: 'bold'
    }}>
      🛒 {totalItems}
    </div>
  );
}

