import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import Form from "./Form";

import { collection, addDoc } from "firebase/firestore";
import validateForm from "../../utils/validacionform.js";
import { toast } from "react-toastify";

import "./Form.css";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmEmail: "",
    direccion: "",
  });

  const [idOrder, setIdOrder] = useState("");

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = async (event) => {
    event.preventDefault();

    // Verificación si los correos electrónicos son iguales
    if (datosForm.email !== datosForm.confirmEmail) {
      toast.error("Los correos electrónicos no coinciden. Por favor, verifíquelos.");
      return;
    }

    // Formatear correctamente la orden
    const datos = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: precioTotal(),
    };

    // Validar formulario antes de subir orden
    const response = await validateForm(datosForm);
    if (response.status === "success") {
      subirOrden(datos);
    } else {
      toast.warn(response.message);
    }
  };

  const subirOrden = async (datos) => {
    const ordenesRef = collection(db, "orders");
    try {
      const respuesta = await addDoc(ordenesRef, datos);

      // Obtener la fecha y hora actuales
      const now = new Date();

      // Formatear la fecha y hora en un formato legible
      const formattedDate = now.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      const formattedTime = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      // Concatenar ID de Firebase con la fecha y hora formateadas
      const customIdOrder = `${respuesta.id} - ${formattedDate} ${formattedTime}`;
      setIdOrder(customIdOrder);
    } catch (error) {
      toast.error("Error al subir la orden.");
      console.error("Error al subir la orden:", error);
    } finally {
      vaciarCarrito();
    }
  };

  return (
    <div className="order">
      {idOrder ? (
        <div>
          <h2>La orden se generó con éxito!!! 😀</h2>
          <p className="mensaje">
            Guarde el id de su compra: <strong className="id">{idOrder}</strong>
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
