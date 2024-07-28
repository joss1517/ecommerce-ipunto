import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import Form from "./Form";

import { collection, addDoc } from "firebase/firestore";
import validateForm from "../../utils/validacionform.js";
import { toast } from "react-toastify";

import "./Form.css"



const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  const [idOrder, setIdOrder] = useState("");

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = async (event) => {
    event.preventDefault();
    //  formatear correctamente la orden
    const datos = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: precioTotal(),
    };

    //? Validar formulario antes de subir orden
    const response = await validateForm(datosForm)
    if (response.status === "success") {
      subirOrden(datos);
    } else {
      toast.warn(response.message)
    }

  };


  const subirOrden = (datos) => {
    const ordenesRef = collection(db, "orders");
    addDoc(ordenesRef, datos)
      .then((respuesta) => {
        setIdOrder(respuesta.id);
      })
      .finally(() => {
        vaciarCarrito()
      })
  };

  return (
    <div className="order">
      {idOrder ? (
        <div>
          <h2>La orden se genero con exito!!! 😀</h2>
          <p className="mensaje">
            Guarde el id de su orden: <strong className="id">{idOrder}</strong>
          </p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};

export default Checkout;
