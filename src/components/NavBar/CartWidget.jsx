import { BsCart2 } from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {
    return (
      <div className="cartwidget">
            <BsCart2 size={30} color="white" />
            <p>1</p>
      </div>
    );
};

export default CartWidget;
