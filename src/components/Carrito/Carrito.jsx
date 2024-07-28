import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom";

import "./Carrito.css";

const Carrito = () => {

  const { carrito, eliminarProducto, vaciarCarrito, precioTotal } = useContext(CartContext)

  // Early return o return temprano
  if (carrito.length === 0) {
    return (
      <div className="carritoVacio">
        <h2>El carrito aún no tiene productos 🥹</h2>
        <Link to="/productos/viniles" className="compra">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Ver Productos
          </button>
        </Link>
      </div>
    );
  }


  return (
    <div className="carritoContainer">
      <h2 className="carrito">Productos en tu Carrito</h2>
      {carrito.map((productoCarrito) => (
        <div key={productoCarrito.id} className="cardContainer">
          <img src={productoCarrito.imagen} width={150} alt="" />
          <p>{productoCarrito.nombre}</p>
          <p>p/u ${productoCarrito.precio}</p>
          <p>cantidad: {productoCarrito.cantidad}</p>
          <p>
            Total parcial {productoCarrito.precio * productoCarrito.cantidad}
          </p>

          <button onClick={() => eliminarProducto(productoCarrito.id)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Eliminar
          </button>
        </div>
      ))}
      <div className="total">
        <button onClick={vaciarCarrito}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Vaciar Carrito
        </button>
        <h3 className="red">Precio Total ${precioTotal()}</h3>
        <Link to="/checkout" className="compra">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );

}

export default Carrito

