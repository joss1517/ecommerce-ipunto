import Item from "./Item";

import './ItemList.css'

const ItemList = ({ viniles }) => {
  return (
    <div className="ItemList">
      {viniles.map((vinil) => (
        <Item key={vinil.id} vinil={vinil} />
      ))}
    </div>
  );
};

export default ItemList;
