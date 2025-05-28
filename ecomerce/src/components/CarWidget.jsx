import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function CarWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div className="car-widget">
      <Link className="menu-ink" to="/carrito">
        Carrito
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}
