// src/components/pages/CartButton.spec.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartButton from "./CartButton";

describe("CartButton component", () => {
  let cart = [];
  const setCart = jest.fn((newCart) => (cart = newCart));

  beforeEach(() => {
    cart = [];
    localStorage.clear();
    setCart.mockClear();
  });

  it("muestra contador del carrito correctamente", () => {
    cart = [
      { id: "ps5", name: "PlayStation 5", price: 599990, qty: 2 },
      { id: "mouse", name: "Logitech Pro X Superlight", price: 105990, qty: 1 }
    ];

    render(<CartButton cart={cart} setCart={setCart} />);

    const count = screen.getByText("3"); // 2 + 1 = 3
    expect(count).toBeInTheDocument();
  });

  it("abre y cierra el panel del carrito al hacer click", () => {
    render(<CartButton cart={cart} setCart={setCart} />);

    const button = screen.getByRole("button", { name: /Carrito/i });
    const panel = document.getElementById("cart-panel");

    // Panel inicialmente oculto
    expect(panel.style.display).toBe("none");

    // Click abre
    fireEvent.click(button);
    expect(panel.style.display).toBe("flex");

    // Click cierra
    fireEvent.click(button);
    expect(panel.style.display).toBe("none");
  });

  it("guarda el carrito en localStorage al actualizarse", () => {
    cart = [
      { id: "ps5", name: "PlayStation 5", price: 599990, qty: 1 }
    ];
    render(<CartButton cart={cart} setCart={setCart} />);
    
    expect(JSON.parse(localStorage.getItem("cart"))).toEqual(cart);

    // Actualiza carrito
    cart.push({ id: "mouse", name: "Mouse", price: 105990, qty: 2 });
    render(<CartButton cart={cart} setCart={setCart} />);

    expect(JSON.parse(localStorage.getItem("cart"))).toEqual(cart);
  });
});
