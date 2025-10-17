// src/components/pages/Registro.spec.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Registro from "./Registro";

describe("Registro component", () => {
  const mockSetUser = jest.fn();
  const mockSetOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("no renderiza cuando open es false", () => {
    render(<Registro user={null} setUser={mockSetUser} open={false} setOpen={mockSetOpen} />);
    expect(screen.queryByRole("heading", { name: /Crear Cuenta/i })).not.toBeInTheDocument();
  });

  it("muestra el modal cuando open es true", () => {
    render(<Registro user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    expect(screen.getByRole("heading", { name: /Crear Cuenta/i })).toBeInTheDocument();
  });

  it("muestra mensaje de error si faltan campos", () => {
    render(<Registro user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    const submitButton = screen.getByRole("button", { name: /Registrarse/i });
    fireEvent.click(submitButton);
    expect(screen.getByText("Completa todos los campos.")).toBeInTheDocument();
    expect(mockSetUser).not.toHaveBeenCalled();
  });

  it("muestra mensaje de error si edad < 18", () => {
    render(<Registro user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    fireEvent.change(screen.getByPlaceholderText("Nombre"), { target: { value: "Brayan" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Edad"), { target: { value: "16" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1234" } });

    const submitButton = screen.getByRole("button", { name: /Registrarse/i });
    fireEvent.click(submitButton);

    expect(screen.getByText("Debes ser mayor de 18 años para registrarte.")).toBeInTheDocument();
    expect(mockSetUser).not.toHaveBeenCalled();
  });

  it("registra usuario correctamente y aplica descuento si email termina en @duocuc.cl", () => {
    render(<Registro user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    fireEvent.change(screen.getByPlaceholderText("Nombre"), { target: { value: "Brayan" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "brayan@duocuc.cl" } });
    fireEvent.change(screen.getByPlaceholderText("Edad"), { target: { value: "20" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1234" } });

    const submitButton = screen.getByRole("button", { name: /Registrarse/i });
    fireEvent.click(submitButton);

    expect(mockSetUser).toHaveBeenCalledWith({
      nombre: "Brayan",
      email: "brayan@duocuc.cl",
      edad: "20",
      password: "1234",
      descuento: 20,
    });
    expect(mockSetOpen).toHaveBeenCalledWith(false);
    expect(screen.queryByText("Completa todos los campos.")).not.toBeInTheDocument();
  });

  it("registra usuario correctamente sin descuento si email no termina en @duocuc.cl", () => {
    render(<Registro user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    fireEvent.change(screen.getByPlaceholderText("Nombre"), { target: { value: "Brayan" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "brayan@gmail.com" } });
    fireEvent.change(screen.getByPlaceholderText("Edad"), { target: { value: "25" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1234" } });

    const submitButton = screen.getByRole("button", { name: /Registrarse/i });
    fireEvent.click(submitButton);

    expect(mockSetUser).toHaveBeenCalledWith({
      nombre: "Brayan",
      email: "brayan@gmail.com",
      edad: "25",
      password: "1234",
      descuento: 0,
    });
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });

  it("cierra el modal al hacer click en cerrar", () => {
    render(<Registro user={null} setUser={mockSetUser} open={true} setOpen={mockSetOpen} />);
    fireEvent.click(screen.getByRole("button", { name: /Cerrar/i }));
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
