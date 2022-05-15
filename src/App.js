import './style.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import AboutUs from './components/AboutUs'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { CartContext } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Popper from 'popper.js'
import $ from 'jquery'


function App() { 
  const [cartContext, setContext] = useState({})

  return (
    <>
      <CartContext.Provider value={cartContext}>
        <BrowserRouter>
          <NavBar brand="Hype Clothes"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer greeting="Lautaro Valenzuela"/>} />
            <Route path="/productos/:itemId" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<AboutUs/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );  
}

export default App;
