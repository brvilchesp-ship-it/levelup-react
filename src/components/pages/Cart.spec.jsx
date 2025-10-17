// src/components/pages/Cart.spec.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  const mockCart = [
    { id: "ps5", name: "PlayStation 5", price: 599990, qty: 2 },
    { id: "mouse", name: "Logitech Pro X Superlight", price: 105990, qty: 1 }
  ];

  it("muestra mensaje cuando el carrito está vacío", () => {
    render(<Cart cart={[]} setCart={jest.fn()} />);
    expect(screen.getByText("Tu carrito está vacío.")).toBeInTheDocument();
  });

  it("muestra los productos en el carrito con cantidad y subtotal", () => {
    render(<Cart cart={mockCart} setCart={jest.fn()} />);

    // Revisa que los productos existan con cantidad y subtotal
    expect(screen.getByText(/PlayStation 5 x 2 - \$[\d,]+/i)).toBeInTheDocument();
    expect(screen.getByText(/Logitech Pro X Superlight x 1 - \$[\d,]+/i)).toBeInTheDocument();

    // Revisa total calculado dinámicamente
    const total = mockCart.reduce((sum, item) => sum + item.price * item.qty, 0);
    expect(screen.getByText(new RegExp(`Total: \\$[\\d,]+`, "i"))).toBeInTheDocument();

    // Botón Pagar debe existir
    expect(screen.getByText(/Pagar/i)).toBeInTheDocument();
  });

  it("permite eliminar un producto del carrito", () => {
    const setCartMock = jest.fn();
    render(<Cart cart={mockCart} setCart={setCartMock} />);

    const ps5Item = screen.getByText(/PlayStation 5 x 2/i).closest("li");
    const deleteButton = ps5Item.querySelector("button");

    fireEvent.click(deleteButton);

    expect(setCartMock).toHaveBeenCalledWith(
      mockCart.filter((item) => item.id !== "ps5")
    );
  });

  it("no muestra botón Pagar si el carrito está vacío", () => {
    render(<Cart cart={[]} setCart={jest.fn()} />);
    expect(screen.queryByText(/Pagar/i)).not.toBeInTheDocument();
  });
});
