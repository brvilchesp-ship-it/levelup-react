// src/components/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Puntos from "./Puntos";
import Info from "./Info";
import Soporte from "./Soporte";
import Footer from "./Footer";
import Catalogo from "../organisms/Catalogo";
import Registro from "./Registro";
import Login from "./Login";
import Reseñas from "./Reseñas";

export default function Home() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [reviews, setReviews] = useState([]);
  const [registroOpen, setRegistroOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <Header
        cart={cart}
        setCart={setCart}
        user={user}
        setUser={setUser}
        setRegistroOpen={setRegistroOpen}
        setLoginOpen={setLoginOpen}
      />
      <Hero />
      <Puntos />
      <Catalogo cart={cart} setCart={setCart} />
      <Info />
      <Reseñas reviews={reviews} setReviews={setReviews} />
      <Registro
        user={user}
        setUser={setUser}
        open={registroOpen}
        setOpen={setRegistroOpen}
      />
      <Login
        user={user}
        setUser={setUser}
        open={loginOpen}
        setOpen={setLoginOpen}
      />
      <Footer />
      <Soporte />
    </>
  );
}
