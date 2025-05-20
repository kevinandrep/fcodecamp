import { useState } from "react";
import "./estilos/boton.css";
import "./App.css";
import { Tarea } from "./components/tarea";

function App() {
  const [lista, setLista] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setLista((prev) => [...prev, tarea]);
  };

  const handleEliminar = (indexAEliminar) => {
    setLista((prev) => prev.filter((_, index) => index !== indexAEliminar));
  };

  return (
    <div className="contenedor-aplicacion">
      <h1>Mis Tareas</h1>
      <div className="contenedor-input">
        <form onSubmit={handleClick}>
          <input
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            placeholder="Escribe una tarea"
          ></input>
          <button type="submit" className="boton-tareas">
            Agregar tarea
          </button>
        </form>
      </div>
      <div className="contenedor-tareas">
        {lista.map((dato, index) => (
          <Tarea
            key={index}
            onClick={() => handleEliminar(index)}
            texto={dato}
          ></Tarea>
        ))}
      </div>
    </div>
  );
}

export default App;
