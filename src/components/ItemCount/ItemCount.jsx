import { useState, } from "react"
import "./ItemCount.css"

const ItemCount = ( {stock, agregarCarrito} ) => {

    const [count, setCount] = useState(1)

    const increment= () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        };
    };

    
    
    

  return (
      <div className="btnContainer">
          
          
              
      <button onClick={decrement} className="btn1"> - </button>
      <p> {count} </p>
          <button onClick={increment} className="btn1"> + </button>
          
          <button   className="btn" onClick={ ()=> agregarCarrito(count)}>Agregar al Carrito</button>
          
    </div>
  );
}

export default ItemCount