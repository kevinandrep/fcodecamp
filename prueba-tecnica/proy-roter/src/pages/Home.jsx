import { Link } from "../Links.jsx";
export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React router desde cero</p>
      <Link to="/about">Ir a sobre nosotros</Link>
    </>
  );
}
