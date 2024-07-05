// import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Title.css"
import { Link } from "react-router-dom";


const Title = (  ) => {
    return (
      <div className="titleContainer">
        {/* {isLoading ? <Loading /> : <ItemList viniles={viniles} />} */}
        <h1> Viniles Decorativos</h1>
        <p>
          Transforma tus espacios con estilo y personalidad, con nuestros
          vinilos decorativos que harán de cada pared una obra de arte.{" "}
        </p>
        <Link to="/productos/viniles" className="btn">
          {" "}
          Productos
        </Link>
      </div>
    );
};

export default Title