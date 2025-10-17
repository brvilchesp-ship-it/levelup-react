// src/components/pages/Reseñas.spec.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reseñas from "./Reseñas";

describe("Reseñas component", () => {
  let reviews = [];
  const setReviews = jest.fn((newReviews) => (reviews = newReviews));

  beforeEach(() => {
    reviews = [];
    setReviews.mockClear();
  });

  it("renderiza el formulario de reseñas", () => {
    render(<Reseñas reviews={reviews} setReviews={setReviews} />);
    expect(screen.getByPlaceholderText("Producto")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tu experiencia")).toBeInTheDocument();
    expect(screen.getByRole("spinbutton")).toBeInTheDocument(); // input number
    expect(screen.getByText(/Guardar/i)).toBeInTheDocument();
  });

  it("agrega una reseña correctamente", () => {
    render(<Reseñas reviews={reviews} setReviews={setReviews} />);

    fireEvent.change(screen.getByPlaceholderText("Producto"), { target: { value: "PlayStation 5" } });
    fireEvent.change(screen.getByPlaceholderText("Tu experiencia"), { target: { value: "Excelente consola!" } });
    fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "5" } });

    fireEvent.click(screen.getByText(/Guardar/i));

    expect(setReviews).toHaveBeenCalledWith([
      { product: "PlayStation 5", text: "Excelente consola!", stars: 5 }
    ]);

    // Simula que las reviews se actualizan
    reviews = [{ product: "PlayStation 5", text: "Excelente consola!", stars: 5 }];
    render(<Reseñas reviews={reviews} setReviews={setReviews} />);

    expect(screen.getByText(/PlayStation 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Excelente consola!/i)).toBeInTheDocument();
    expect(screen.getByText(/\(5⭐\)/i)).toBeInTheDocument();
  });
});
