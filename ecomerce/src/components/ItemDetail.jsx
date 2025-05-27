import { useState } from "react";
import { ItemCount } from "./itemCount";

export function ItemDetail({ item }) {
  const [count, setCount] = useState(1);

  const handleRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSumar = () => {
    count < item.stock && setCount(count + 1);
  };

  const handleAgregar = () => {
    console.log({ ...item, count });
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.nombre} />
        <div>
          <h3 className="titulo">{item.nombre}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">{item.categoria}</p>
          <p className="precio">{item.precio}</p>
          <ItemCount
            count={count}
            handleRestar={handleRestar}
            handleSumar={handleSumar}
            handleAgregar={handleAgregar}
          ></ItemCount>
        </div>
      </div>
    </div>
  );
}
