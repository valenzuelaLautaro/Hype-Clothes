import './style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <NavBar brand="Hype Clothes"/>
      <ItemListContainer greeting="Lautaro Valenzuela" />  
    </>
  );
}

export default App;
