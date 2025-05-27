import { useState } from "react";

export function Contacto() {
  const [valores, setValores] = useState({
    nombre: "",
    email: "",
  });

  const handleValores = (event) => {
    setValores({ ...valores, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valores);
  };
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={valores.nombre}
          onChange={handleValores}
          type="text"
          placeholder="Nombre"
          name="nombre"
        ></input>
        <input
          value={valores.email}
          onChange={handleValores}
          type="email"
          placeholder="Correo"
          name="email"
        ></input>
        <button className="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
