
import './App.css'
import Cart from './components/pages/Cart'
import Catalogo from './components/pages/Catalogo'
import Footer from './components/pages/footer'
import Header from './components/pages/Header'
import Hero from './components/pages/Hero'
import Info from './components/pages/Info'
import Puntos from './components/pages/Puntos'
import Reseñas from './components/pages/Reseñas'
import Soporte from './components/pages/Soporte'

function App() {

  return (
   <>
   <Header/>
   <Hero/>
   <Puntos/>
   <Catalogo/>
   <Cart/>
   <Reseñas/>
   <Info/>
   <Footer/>
   <Soporte/>
   </>
  )
}

export default App
