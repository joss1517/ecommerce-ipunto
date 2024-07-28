import { useState, useEffect } from "react";
import useLoading from "../../hooks/useLoading";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [viniles, setViniles] = useState([]);
  const { isLoading, showLoading, hideLoading } = useLoading();

  const { idCategory } = useParams();

  const obtenerViniles = () => {
    const vinilesRef = collection(db, "viniles");
    getDocs(vinilesRef)
      .then((respuesta) => {
        const data = respuesta.docs.map((vinilDb) => {
          return { id: vinilDb.id, ...vinilDb.data() };
        });

        setViniles(data);
      });
  };

  const obtenerVinilesFiltrados = () => {
    const vinilesRef = collection(db, "viniles");
    const q = query(vinilesRef, where("categoria", "==", idCategory))
    getDocs(q)
      .then((respuesta) => {
        const data = respuesta.docs.map((vinilDb) => {
          return { id: vinilDb.id, ...vinilDb.data() };
        });
        setViniles(data)
      })
  }
  useEffect(() => {

    if (idCategory) {
      obtenerVinilesFiltrados()
    } else {
      obtenerViniles();
    }

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