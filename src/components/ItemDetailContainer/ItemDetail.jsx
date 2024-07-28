import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


import ItemCount from "../ItemCount/ItemCount"

import "./ItemDetail.css";


const ItemDetail = ({ vinil }) => {

  const { agregarProducto } = useContext(CartContext)

  const agregarCarrito = (count) => {
    const vinilCarrito = {
      ...vinil,
      cantidad: count
    }
    agregarProducto(vinilCarrito);
  }



  return (


    <div className="container">
      <div className="image">
        <img src={vinil.imagen} alt="" />
      </div>

      <div className="details">
        <h2> {vinil.nombre} </h2>
        <p> {vinil.descripcion} </p>
        <p> Medidas: {vinil.medidas} </p>
        <p>
          Precio: $ <strong>{vinil.precio}</strong>
        </p>

        <ul>
          <li>
            <strong>Material de Alta Calidad: </strong>
            Hecha de vinil adhesivo duradero, esta calcomanía es resistente al
            agua y fácil de limpiar, asegurando una larga vida útil y
            manteniendo su apariencia vibrante.
          </li>
          <li>
            <strong>Fácil de Aplicar y Remover: </strong>
            Gracias a su diseño autoadhesivo, puedes instalar fácilmente sin
            necesidad de herramientas adicionales.
          </li>
          <li>
            <strong>Versatilidad en el Diseño: </strong>
            Disponible en una variedad de tamaños y estilos, desde modernos y
            minimalistas hasta clásicos y detallados, para que encuentres la
            opción perfecta que se adapte a tu decoración.
          </li>
          <li>
            <strong>Uso en Múltiples Superficies: </strong>
            Ideal para paredes, ventanas, espejos, muebles y cualquier
            superficies lisa y limpia. Seguro para tu hogar: Nuestro vinil
            adhesivo no contiene sustancias tóxicas, haciéndolo seguro para el
            uso en interiores, incluso en habitaciones de niños.
          </li>
        </ul>

        <ItemCount stock={vinil.stock} agregarCarrito={agregarCarrito} />
      </div>

      <div className="instructions">
        <h3>Instrucciones de Aplicación</h3>
        <ol>
          <li>
            Limpia la superficie donde deseas aplicar la calcomanía,
            asegurándote de que esté seca y libre de polvo.
          </li>
          <li>Retira cuidadosamente la calcomanía del papel protector.</li>
          <li>
            Coloca la calcomanía en la posición deseada y presiona firmemente
            desde arriba hacia abajo para evitar burbujas de aire
          </li>
          <li>
            Si es necesario, utiliza un atarjeta plástica para alisar y asegurar
            una mejor adherencia
          </li>
        </ol>
        <p>
          Dale vida a tus espacios con nuestras calcomanías decorativas de vinil
          adhesivo, combinando practicidad y estilo en un solo producto.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
