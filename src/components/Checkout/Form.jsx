import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <div className="form">
      <div className="login-box">
        <p>Termina la compra</p>
        <form onSubmit={enviarOrden}>
          <div className="user-box">
            <input
              type="text"
              name="nombre"
              value={datosForm.nombre}
              onChange={guardarDatosInput}
            />
            <label>Nombre</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name="telefono"
              value={datosForm.telefono}
              onChange={guardarDatosInput}
            />
            <label>Teléfono</label>
          </div>

          <div className="user-box">
            <input
              type="email"
              name="email"
              value={datosForm.email}
              onChange={guardarDatosInput}
            />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input
              type="email"
              name="confirmEmail"
              value={datosForm.confirmEmail}
              onChange={guardarDatosInput}
            />
            <label>Confirmar Email</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name="direccion"
              value={datosForm.direccion}
              onChange={guardarDatosInput}
            />
            <label>Dirección</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            COMPRAR
          </button>

        </form>
          <Link to="/productos/viniles" className="a2">
            Ir a Catálogo
        </Link>
        
      </div>
      
    </div>
  );
};

export default Form;
