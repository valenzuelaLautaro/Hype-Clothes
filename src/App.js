import './style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import AboutUs from './components/AboutUs'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Popper from 'popper.js'
import $ from 'jquery'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar brand="Hype Clothes"/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Lautaro Valenzuela"/>} />
          <Route path="/productos" element={<ItemListContainer greeting="Lautaro Valenzuela"/>} />
          <Route path="/productos/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
