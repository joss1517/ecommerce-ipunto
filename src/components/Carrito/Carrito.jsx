import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

import "./Carrito.css";

const Carrito = () => {

    const { carrito, eliminarProducto, vaciarCarrito, precioTotal } = useContext(CartContext)

  return (
      <div className="carritoContainer">
          {
              carrito.map((productoCarrito) => (
                  <div key={productoCarrito.id} className="cardContainer">  
                      <img src={productoCarrito.imagen} width={150} alt="" />
                      <p>{productoCarrito.nombre}</p>
                      <p>P/U ${productoCarrito.precio}</p>
                      <p>cantidad: { productoCarrito.cantidad}</p>
                      <p>Total parcial { productoCarrito.precio * productoCarrito.cantidad}</p>
                      
                      <button onClick={ () => eliminarProducto(productoCarrito.id)}>Eliminar</button>
                  </div>
              ))
          }
          <p>Precio Total ${ precioTotal()}</p>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button >Terminar Compra</button>
    </div>
  )
}

export default Carrito