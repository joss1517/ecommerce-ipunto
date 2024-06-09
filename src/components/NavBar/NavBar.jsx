import logoipunto from '../../img/ipunto.png'
import "./NavBar.css";
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logoipunto} width={110} alt="" />
      </div>

      <ul>
        <li>Cocina</li>
        <li>Comedor</li>
        <li>Sala</li>
        <li>Recamara</li>
        <li>Infantil</li>
        <li>Salón de belleza</li>
        <li>Gym</li>
        <li>Dentista</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar