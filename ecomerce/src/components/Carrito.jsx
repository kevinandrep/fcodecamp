import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function Carrito() {
  const { carrito } = useContext(CartContext);
  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((producto) => {
        return (
          <div key={producto.id}>
            <h2>{producto.titulo}</h2>
            <p>{producto.precio}</p>
            <p>{producto.cantidad}</p>
          </div>
        );
      })}
    </div>
  );
}
