import { Tarea } from "./tarea";

export function Tareas({ lista, handleEliminar }) {
  return (
    <div>
      {lista.map((dato, index) => (
        <Tarea
          key={index}
          onClick={() => handleEliminar(index)}
          texto={dato}
        ></Tarea>
      ))}
    </div>
  );
}
