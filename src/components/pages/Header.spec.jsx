import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Header from "./Header";


it("abre y cierra el modal de perfil correctamente", () => {
  const mockSetCart = jest.fn();
  const mockSetUser = jest.fn();
  const mockSetRegistroOpen = jest.fn();
  const mockSetLoginOpen = jest.fn();
  const user = { name: "Brayan", email: "test@duocuc.cl" };

  render(
    <Header
      cart={[]}
      setCart={mockSetCart}
      user={user}
      setUser={mockSetUser}
      setRegistroOpen={mockSetRegistroOpen}
      setLoginOpen={mockSetLoginOpen}
    />
  );

  fireEvent.click(screen.getByText(/Perfil/i));

  const modal = screen.getByTestId("perfil-modal");
  expect(modal).toBeInTheDocument();

  const closeButton = within(modal).getByText(/Cerrar/i);
  fireEvent.click(closeButton);

  expect(screen.queryByTestId("perfil-modal")).not.toBeInTheDocument();
});
