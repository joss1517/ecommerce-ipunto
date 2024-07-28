import { string, object, mixed } from "yup";

let userSchema = object({
  nombre: string().required("El campo nombre no puede quedar vacio"),
  telefono: string().required("El campo teléfono no puede quedar vacio"),
  email: string()
    .email("El campo email no tiene el formato correcto")
    .required("El campo email no puede estar vacio"),
  direccion: string().required("El campo dirección no puede estar vacio")
    .matches(/^[a-zA-Z0-9\s,.-]+$/, "El campo dirección contiene caracteres no permitidos")
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
