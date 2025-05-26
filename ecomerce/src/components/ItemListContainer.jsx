import { useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
export function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().category;
  const [titulo, setTitulo] = useState("Productos");

  console.log(categoria);

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProductos(
          res.filter((producto) => producto.categoria === categoria)
        );
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo}></ItemList>
    </div>
  );
}
