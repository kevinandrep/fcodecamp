import { useState } from "react";
import "../styles/contador.css";

export function Contador() {
  const [counter, setCounter] = useState(0);

  const handleclick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="contenedor-contador">
      <div className="contenedor-number">
        <p>{counter}</p>
      </div>
      <button className="boton-contar" onClick={handleclick}>
        Click
      </button>
      <button className="boton-reset" onClick={handleReset}>
        Reiniciar
      </button>
    </div>
  );
}
