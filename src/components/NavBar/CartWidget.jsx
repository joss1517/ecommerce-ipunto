import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { BsCart2 } from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)
    return (
      <Link to="/carrito"  className="cartwidget">
            <BsCart2 size={30} color="white" />
            <p>{ cantidadTotal()}</p>
      </Link>
    );
};

export default CartWidget;
