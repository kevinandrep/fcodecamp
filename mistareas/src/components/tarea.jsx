import "../estilos/tareas.css";

export function Tarea({ texto, onClick }) {
  return (
    <div className="contenedor-tarea">
      <p>{texto}</p>
      <button onClick={onClick}>x</button>
    </div>
  );
}
