import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Title from "./components/Title/Title";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer theme="dark" />

        <Routes>
          <Route path="/" element={<Title />} />
          {/* <Route path="/" element={<ItemListContainer /> } /> */}
          <Route path="/productos/viniles" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
          <Route path="/detalle/:idVInil" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
