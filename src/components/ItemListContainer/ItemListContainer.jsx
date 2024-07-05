import { obtenerViniles } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import Loading from "../Ejemplos/Loading.jsx";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [viniles, setViniles] = useState([]);

  const { idCategory } = useParams();

  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // mostrar pantalla de carga
    showLoading();

    obtenerViniles()
      .then((respuesta) => {
        if (idCategory) {
          //   filtrar productos por categoria
          const vinilesFiltrados = respuesta.filter(
            (producto) => producto.categoria === idCategory);
          setViniles(vinilesFiltrados);
        } else {
          //   Guardar todos los productos
          setViniles(respuesta);
        }
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        console.log("Finalizo la promesa");

        //   ocultar pantalla de carga
        hideLoading();
      });
  }, [idCategory]);

  return (
    <div>
      <div className="cardContainer">
        {isLoading ? <Loading /> : <ItemList viniles={viniles} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
