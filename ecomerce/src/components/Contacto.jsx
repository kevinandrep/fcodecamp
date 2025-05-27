import { useForm } from "react-hook-form";

export function Contacto() {
  const { register, handleSubmit } = useForm();
  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input {...register("nombre")} type="text" placeholder="Nombre"></input>
        <input {...register("email")} type="email" placeholder="Correo"></input>
        <button className="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
