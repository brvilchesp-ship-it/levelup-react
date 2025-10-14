import React, { useContext } from 'react';
import Catalogo from '../organisms/Catalogo';
import Header from './Header';
import Hero from './Hero';
import Puntos from './Puntos';
import Reseñas from './Reseñas';
import Info from './Info';
import Soporte from './Soporte';
import Footer from './footer';

export default function Home() {


  return (
    <>
      <Header/>
      <Hero/>
      <Puntos/>
      <Catalogo/>
      <Reseñas/>
      <Info/>
      <Footer/>
      <Soporte/>
    </>
  )
}