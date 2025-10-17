import { fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import Catalogo from "./Catalogo";

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));
  Storage.prototype.setItem = jest.fn();
});

describe("Catalogo component", () => {
  const mockProduct = {
    id: "ps5",
    name: "PlayStation 5",
    price: 599990,
    img: "https://media.falabella.com/falabellaCL/144879483_01/w=1500,h=1500,fit=pad",
    category: "Consolas",
    description: "Consola de última generación con gráficos impresionantes."
  };

  it("muestra el producto PlayStation 5 correctamente", () => {
    render(<Catalogo cart={[]} setCart={jest.fn()} />);
    expect(screen.getByText("PlayStation 5")).toBeInTheDocument();
    expect(
      screen.getByText("Consola de última generación con gráficos impresionantes.")
    ).toBeInTheDocument();
    expect(screen.getByText("$599.990")).toBeInTheDocument();
  });

  it("guarda el producto en setCart al hacer clic en 'Agregar al carrito'", () => {
    const setCartMock = jest.fn();
    render(<Catalogo cart={[]} setCart={setCartMock} />);

    // Buscamos la tarjeta específica de PS5
    const card = screen.getByText("PlayStation 5").closest(".card");
    const button = within(card).getByText("Agregar al carrito");

    fireEvent.click(button);

    // Verifica que setCart se haya llamado correctamente
    expect(setCartMock).toHaveBeenCalledWith([
      { ...mockProduct, qty: 1 }
    ]);
  });
});
