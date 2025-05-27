import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        kevinshop
      </Link>
      <ul className="menu">
        <li className="menu-link">
          <Link to="/">Inicio</Link>
        </li>
        <li className="menu-link">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="menu-link">
          <Link to="/productos/medias">Medias</Link>
        </li>
        <li className="menu-link">
          <Link to="productos/pantalones">Pantalones</Link>
        </li>
        <li className="menu-link">
          <Link to="productos/remeras">Remeras</Link>
        </li>
        <li className="menu-link">
          <Link to="productos/buzos">Buzos</Link>
        </li>
        <li className="menu-link">
          <Link to="nosotros">Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
}
