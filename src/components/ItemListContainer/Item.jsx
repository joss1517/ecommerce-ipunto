import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({vinil}) => {
  return (
    <div className="cardContainer">
      <Link to={"/detalle/" + vinil.id} className="card">
        <img src={vinil.imagen} alt="" />
        <p className="nombre">{vinil.nombre} </p>
        <p className="precio">${vinil.precio} </p>
      </Link>
    </div>
  );
}

export default Item