// src/components/pages/CartCounter.spec.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import CartCounter from "./CartCounter";

describe("CartCounter component", () => {
  it("muestra 0 si el carrito está vacío", () => {
    render(<CartCounter cart={[]} />);
    expect(screen.getByText(/🛒 0/i)).toBeInTheDocument();
  });

  it("muestra el total correcto de items en el carrito", () => {
    const cart = [
      { id: "ps5", name: "PlayStation 5", price: 599990, qty: 2 },
      { id: "mouse", name: "Logitech Pro X Superlight", price: 105990, qty: 1 },
    ];

    render(<CartCounter cart={cart} />);
    expect(screen.getByText(/🛒 3/i)).toBeInTheDocument(); // 2 + 1 = 3
  });

  it("actualiza correctamente al cambiar el carrito", () => {
    const { rerender } = render(<CartCounter cart={[{ id: "ps5", qty: 1 }]} />);
    expect(screen.getByText(/🛒 1/i)).toBeInTheDocument();

    // Cambia el carrito
    rerender(<CartCounter cart={[{ id: "ps5", qty: 1 }, { id: "mouse", qty: 2 }]} />);
    expect(screen.getByText(/🛒 3/i)).toBeInTheDocument();
  });
});
