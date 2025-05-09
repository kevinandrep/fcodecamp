import { Children, useState } from "react";
import "../styles/contador.css";
import { Boton } from "./boton";

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
      <Boton name={"boton-contar"} onclick={handleclick}>
        Click
      </Boton>
      <Boton name={"boton-reset"} onclick={handleReset}>
        Reiniciar
      </Boton>
    </div>
  );
}
