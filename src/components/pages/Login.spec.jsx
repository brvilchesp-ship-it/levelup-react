// src/components/pages/Login.spec.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  const mockSetUser = jest.fn();
  const mockSetOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("no renderiza cuando open es false", () => {
    render(<Login user={null} setUser={mockSetUser} open={false} setOpen={mockSetOpen} />);
    expect(screen.queryByRole("heading", { name: /Ingresar/i })).not.toBeInTheDocument();
  });

  it("muestra el modal cuando open es true", () => {
    render(<Login user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    expect(screen.getByRole("heading", { name: /Ingresar/i })).toBeInTheDocument();
  });

  it("muestra mensaje de error si usuario/contraseña son incorrectos", () => {
    localStorage.setItem("user", JSON.stringify({ email: "test@example.com", password: "1234" }));
    render(<Login user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);

    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "wrong@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "wrongpass" } });

    const submitButton = screen.getByRole("button", { name: /Ingresar/i });
    fireEvent.click(submitButton);

    expect(screen.getByText("Usuario o contraseña incorrectos.")).toBeInTheDocument();
    expect(mockSetUser).not.toHaveBeenCalled();
    expect(mockSetOpen).not.toHaveBeenCalled();
  });

  it("llama a setUser y cierra modal si login es correcto", () => {
    const userData = { email: "test@example.com", password: "1234" };
    localStorage.setItem("user", JSON.stringify(userData));

    render(<Login user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);

    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1234" } });

    const submitButton = screen.getByRole("button", { name: /Ingresar/i });
    fireEvent.click(submitButton);

    expect(mockSetUser).toHaveBeenCalledWith(userData);
    expect(mockSetOpen).toHaveBeenCalledWith(false);
    expect(screen.queryByText("Usuario o contraseña incorrectos.")).not.toBeInTheDocument();
  });

  it("cierra el modal al hacer click en cerrar", () => {
    render(<Login user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    fireEvent.click(screen.getByRole("button", { name: /Cerrar/i }));
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
