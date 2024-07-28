import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import db from "../../db/db.js"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {
  const [vinil, setvinil] = useState({});

  const { idVInil } = useParams();

  const obtenerVinil = () => {
    const docRef = doc(db, "viniles", idVInil)
    getDoc(docRef)
      .then((respuesta) => {
        const data = { id: respuesta.id, ...respuesta.data() }
        setvinil(data)
      })
  }

  useEffect(() => {
    obtenerVinil()

  }, []);

  return (
    <ItemDetail vinil={vinil} />
  )
};

export default ItemDetailContainer;
