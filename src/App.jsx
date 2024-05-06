import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";

function App() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<>Cart</>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
