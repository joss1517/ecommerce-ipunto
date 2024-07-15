import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Title from "./components/Title/Title";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/productos/viniles" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategory"  element={<ItemListContainer />}/>
          <Route path="/detalle/:idVInil" element={<ItemDetailContainer />} />
          <Route  path="/carrito" element={ <Carrito/> } />
        </Routes>
              
        <Footer />      
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
