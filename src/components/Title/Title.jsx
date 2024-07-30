// import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

import "./Title.css"


const Title = () => {
  return (

    <div>
      <div className="titleContainer">
        <h1> Viniles Decorativos</h1>
        <p>
          Transforma tus espacios con estilo y personalidad, con nuestros
          vinilos decorativos que harán de cada pared una obra de arte.{" "}
        </p>
        <Link to="/productos/viniles" className="btn">Ver Productos</Link>
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );

};

export default Title

