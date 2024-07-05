import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Title from "./components/Title/Title";

function App() {
  return (
    <BrowserRouter>
          <NavBar />
          
          <Routes>
              
             <Route path="/" element={<Title />} />
             <Route path="/productos/viniles" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
            <Route path="/detalle/:idVInil" element={<ItemDetailContainer />} />
            </Routes>
          
    </BrowserRouter>
  );
}

export default App;
