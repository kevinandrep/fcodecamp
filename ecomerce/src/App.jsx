import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nosotros } from "./components/Nosotros";

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
        </Routes>
        {/* <ItemListContainer></ItemListContainer> */}
        {/* <ItemDetailContainer itemId={3}></ItemDetailContainer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
