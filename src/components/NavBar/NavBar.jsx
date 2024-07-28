import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

import "./NavBar.css";
import logoipunto from "../../img/ipunto.png";

const NavBar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        <img src={logoipunto} width={150} alt="" />
      </Link>

      <ul>
        <Link to="/categoria/cocinas">Cocinas</Link>
        <Link to="/categoria/comedores">Comedores</Link>
        <Link to="/categoria/salas">Salas</Link>
        <Link to="/categoria/recamaras">Recamaras</Link>
        <Link to="/categoria/infantil">Infantil</Link>
        <Link to="/categoria/belleza">Salón de Belleza</Link>
        <Link to="/categoria/fitness">Fitness</Link>

      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
