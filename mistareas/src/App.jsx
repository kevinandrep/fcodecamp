import { useState } from "react";
import "./estilos/boton.css";
import "./App.css";

function App() {
  const [lista, setLista] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setLista((prev) => [...prev, tarea]);
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
        {lista.map((dato) => (
          <li key={dato}>{dato}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
