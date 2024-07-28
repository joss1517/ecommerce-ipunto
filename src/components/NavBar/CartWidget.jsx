import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import { BsCart2 } from "react-icons/bs";

import "./CartWidget.css";

const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)
  let cantidad = cantidadTotal()

  return (
    <Link to="/carrito" className="cartwidget">
      <BsCart2 size={30} color="white" />
      <p>{cantidad > 0 && cantidad}</p>
    </Link>
  );
};

export default CartWidget;
