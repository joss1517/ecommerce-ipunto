import { useState, useEffect } from "react";
import useLoading from "../../hooks/useLoading";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { rutaLocal } from "../../utils/rutaLocal.js";

import "./ItemListContainer.css";

const mapearVinil = (vinilDb) => {
    const datos = vinilDb.data();
    return { id: vinilDb.id, ...datos, imagen: rutaLocal(datos.imagen) };
};

const ItemListContainer = () => {
    const [viniles, setViniles] = useState([]);
    const { isLoading, showLoading, hideLoading } = useLoading();

    const { idCategory } = useParams();

    const obtenerViniles = () => {
        const vinilesRef = collection(db, "viniles");
        getDocs(vinilesRef).then((respuesta) => {
            setViniles(respuesta.docs.map(mapearVinil));
        });
    };

    const obtenerVinilesFiltrados = () => {
        const vinilesRef = collection(db, "viniles");
        const q = query(vinilesRef, where("categoria", "==", idCategory));
        getDocs(q).then((respuesta) => {
            setViniles(respuesta.docs.map(mapearVinil));
        });
    };

    useEffect(() => {
        if (idCategory) {
            obtenerVinilesFiltrados();
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