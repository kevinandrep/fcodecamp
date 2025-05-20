import "./App.css";
import { Boton } from "./componentes/Boton";
import { Pantalla } from "./componentes/Pantalla";
import { BotonClear } from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
    console.log(input);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("agregue valores");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src="./vite.svg" />
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input}></Pantalla>
        <div className="fila">
          <Boton onClick={handleClick}>1</Boton>
          <Boton onClick={handleClick}>2</Boton>
          <Boton onClick={handleClick}>3</Boton>
          <Boton onClick={handleClick}>+</Boton>
        </div>
        <div className="fila">
          <Boton onClick={handleClick}>4</Boton>
          <Boton onClick={handleClick}>5</Boton>
          <Boton onClick={handleClick}>6</Boton>
          <Boton onClick={handleClick}>-</Boton>
        </div>
        <div className="fila">
          <Boton onClick={handleClick}>7</Boton>
          <Boton onClick={handleClick}>8</Boton>
          <Boton onClick={handleClick}>9</Boton>
          <Boton onClick={handleClick}>*</Boton>
        </div>
        <div className="fila">
          <Boton onClick={calcularResultado}>=</Boton>
          <Boton onClick={handleClick}>0</Boton>
          <Boton onClick={handleClick}>.</Boton>
          <Boton onClick={handleClick}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>fdasfdsa</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
