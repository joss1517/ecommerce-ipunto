import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";
import { rutaLocal } from "../../utils/rutaLocal.js";

const ItemDetailContainer = () => {
    const [vinil, setvinil] = useState({});

    const { idVInil } = useParams();

    const obtenerVinil = () => {
        const docRef = doc(db, "viniles", idVInil);
        getDoc(docRef).then((respuesta) => {
            if (!respuesta.exists()) {
                setvinil({});
                return;
            }
            const datos = respuesta.data();
            setvinil({
                id: respuesta.id,
                ...datos,
                imagen: rutaLocal(datos.imagen),
            });
        });
    };

    useEffect(() => {
        obtenerVinil();
    }, [idVInil]);

    return <ItemDetail vinil={vinil} />;
};

export default ItemDetailContainer;