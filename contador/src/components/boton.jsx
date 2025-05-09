export function Boton({ onclick, children, name }) {
  return (
    <button className={name} onClick={onclick}>
      {children}
    </button>
  );
}
