export function Busqueda({ handleClick, tarea, setTarea }) {
  return (
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
  );
}
