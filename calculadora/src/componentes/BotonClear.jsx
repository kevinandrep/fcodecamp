import "../estilos/botonClear.css";

export function BotonClear({ children, manejarClear }) {
  return (
    <div onClick={manejarClear} className="boton-clear">
      {children}
    </div>
  );
}
