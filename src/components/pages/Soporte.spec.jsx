// src/components/pages/Soporte.spec.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Soporte from "./Soporte";

describe("Soporte component", () => {
  it("renderiza el botón de soporte correctamente", () => {
    render(<Soporte />);
    
    const link = screen.getByTitle("Soporte Técnico");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://wa.me/56912345678");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.id).toBe("soporte-btn");
  });
});
