import { useState } from "react";

import { Link } from "react-router-dom";

import "./ItemCount.css";

const ItemCount = ({ stock, agregarCarrito }) => {
  const [count, setCount] = useState(1);
  const [agregado, setAgregado] = useState(false)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const seAgrego = () => {
    agregarCarrito(count);
    setAgregado(true)
  }

  if (agregado) {
    return (
      <Link to="/checkout" className="compra">
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Terminar Comprar
        </button>
      </Link>
    )
  }

  return (
    <div className="btnContainer">
      <button onClick={decrement} className="btn1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>-
      </button>
      <p> {count} </p>
      <button onClick={increment} className="btn1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>+
      </button>

      <button className="button3" onClick={seAgrego}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Agregar al Carrito
      </button>
    </div>

  );


};

export default ItemCount;
