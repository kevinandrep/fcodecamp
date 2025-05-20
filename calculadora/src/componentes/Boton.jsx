import "../estilos/boton.css";

export function Boton({ children, onClick }) {
  const esOperador = (valor) => {
    const val = String(valor).trim(); // fuerza a string y elimina espacios
    return ["+", "-", "*", "/", "÷"].includes(val);
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => onClick(children)}
    >
      {children}
    </div>
  );
}
