// src/components/pages/Hero.spec.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("muestra el título principal", () => {
    render(<Hero />);
    expect(screen.getByText(/Bienvenidos a LEVEL-UP GAMER/i)).toBeInTheDocument();
  });

  it("muestra la descripción con Puntos LevelUp", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Consolas, accesorios, PCs, sillas y más/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Puntos LevelUp/i)).toBeInTheDocument();
  });
});
