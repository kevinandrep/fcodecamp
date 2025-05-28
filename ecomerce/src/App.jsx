import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import { Carrito } from "./components/Carrito";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, count) => {
    const itemAgregado = { ...item, cantidad: count };
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (prod) => prod.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += count;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  return (
    <div>
      <CartContext.Provider
        value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}
      >
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route
              path="/item/:id"
              element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>
            <Route
              path="/productos/:category"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route
              path="/productos"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
            <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            <Route path="/carrito" element={<Carrito></Carrito>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
