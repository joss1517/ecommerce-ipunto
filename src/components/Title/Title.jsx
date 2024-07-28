// import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

import "./Title.css"


const Title = () => {
  return (
    <div className="titleContainer">
      {/* {isLoading ? <Loading /> : <ItemList viniles={viniles} />} */}
      <h1> Viniles Decorativos</h1>
      <p>
        Transforma tus espacios con estilo y personalidad, con nuestros
        vinilos decorativos que harán de cada pared una obra de arte.{" "}
      </p>
      <Link to="/productos/viniles" className="btn">Ver Productos</Link>
    </div>
  );
};

export default Title

