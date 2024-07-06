import { useState, useEffect} from "react"
import "./ItemCount.css"

const ItemCount = ( {stock, onAdd} ) => {

    const [count, setCount] = useState(1)

    const increment= () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        };
    };

    
    
    // console.log("agregar");
    

  return (
      <div className="btnContainer">
          
          
              
      <button onClick={decrement} className="btn1"> - </button>
      <p> {count} </p>
          <button onClick={increment} className="btn1"> + </button>
          
          <button   className="btn" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
          
    </div>
  );
}

export default ItemCount