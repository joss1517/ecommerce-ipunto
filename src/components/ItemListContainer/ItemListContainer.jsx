import "./ItemListContainer.css";

const ItemListContainer = ({saludo, saludo2}) => {
  return (
      <div className="itemList">
          <h1 className="saludo">{ saludo }</h1>
    </div>
  )
}

export default ItemListContainer