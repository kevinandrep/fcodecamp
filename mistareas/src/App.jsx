import { useState } from "react";
import "./estilos/boton.css";
import "./App.css";
import { Tarea } from "./components/tarea";
import { Busqueda } from "./components/busqueda";
import { Tareas } from "./components/tareas";

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
      <Busqueda
        handleClick={handleClick}
        tarea={tarea}
        setTarea={setTarea}
      ></Busqueda>
      <Tareas lista={lista} handleEliminar={handleEliminar}></Tareas>
    </div>
  );
}

export default App;
