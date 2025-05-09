import "../styles/Testimonios.css";

export function Testimonio({ nombre, cargo, texto, imagen }) {
  return (
    <div className="contenedor-testimonio">
      <img alt="audra" className="imagen-testimonio" src={imagen}></img>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{nombre}</p>
        <p className="cargo-testimonio">{cargo}</p>
        <p className="texto-testimonio">{texto}</p>
      </div>
    </div>
  );
}
