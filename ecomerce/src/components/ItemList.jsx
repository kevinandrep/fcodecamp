import { Item } from "./Item";
import { toCapital } from "../helpers/toCapital";

export function ItemList({ productos, titulo }) {
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(titulo)}</h2>
      <div className="productos">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto}></Item>
        ))}
      </div>
    </div>
  );
}
