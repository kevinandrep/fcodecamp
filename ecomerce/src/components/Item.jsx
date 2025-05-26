import { Link } from "react-router-dom";
export function Item({ producto }) {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.categoria}</p>
      <Link className="ver-mas" to={`/item/${producto.id}`}>
        Ver mas
      </Link>
    </div>
  );
}
