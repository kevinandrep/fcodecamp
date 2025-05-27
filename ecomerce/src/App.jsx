import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
