import { useState, useEffect} from "react"
import { obtenerViniles } from "../../data/data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = ( ) => {
    const [vinil, setvinil] = useState({})

    
    const { idVInil } = useParams();
   

    useEffect(() => {
        obtenerViniles()
            .then((data) => {
                const vinilFiltrado = data.find(
                  (vinildata) => vinildata.id === idVInil
                );
                setvinil(vinilFiltrado)
        })
    
}, [] )

  return (
     
          <ItemDetail vinil={ vinil } />
    
  )
}

export default ItemDetailContainer