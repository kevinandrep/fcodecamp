import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((producto) => {
        return (
          <div key={producto.id}>
            <h2>{producto.titulo}</h2>
            <p>Precio unitario: {producto.precio}</p>
            <p>Precio: {producto.precio * producto.cantidad}</p>
            <p>Cantidad: {producto.cantidad}</p>
          </div>
        );
      })}
      {carrito.length > 0 ? (
        <>
          <h2>Precio total {precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar</button>
        </>
      ) : (
        <h2>El carrito esta vacio</h2>
      )}
    </div>
  );
}
