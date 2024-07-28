import { createContext, useState, useEffect } from "react";

// Funciones para interactuar con localStorage
const saveCarritoToLocalStorage = (carrito) => {
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

const getCarritoFromLocalStorage = () => {
  const carrito = localStorage.getItem('carrito');
  return carrito ? JSON.parse(carrito) : [];
};

// Creamos un contexto de React llamado CartContext
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Inicializa el estado del carrito con el carrito almacenado en localStorage
  const [carrito, setCarrito] = useState(getCarritoFromLocalStorage());

  // Efecto para guardar el carrito en localStorage cada vez que se actualice
  useEffect(() => {
    saveCarritoToLocalStorage(carrito);
  }, [carrito]);

  const agregarProducto = (producto) => {
    const condicion = estaEnElCarrito(producto.id);
    if (condicion) {
      // Sumar la cantidad nueva
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === producto.id) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + producto.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(productosModificados);
    } else {
      // Agregar producto nuevo
      setCarrito([...carrito, producto]);
    }
  };

  const estaEnElCarrito = (idProducto) => {
    return carrito.some((producto) => producto.id === idProducto);
  };

  const cantidadTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  };

  const precioTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (productoCarrito) => productoCarrito.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        vaciarCarrito,
        eliminarProducto,
        precioTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
