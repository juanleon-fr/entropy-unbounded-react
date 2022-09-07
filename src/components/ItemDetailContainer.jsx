import ItemDetail from "./ItemDetail";
import itemListData from "../utils/json/itemListData.json";
import Delay from "../utils/ItemPromise";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const clicked = 10;
    // por ahora 6 hardcoded, mas adelante registrare la key seleccionada por el usuario al hacer click en "detalles"
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const arrayFind = clicked - 1;
        const productSelect = itemListData.find(element => element.id > arrayFind)
        Delay(productSelect)
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [])
    if (product.title != null) {
        return (
            <div className="itemDetailContainer card">
                <ItemDetail data={product} initial={1}/>
                {/* el numero inicial va a ser checkeado desde el carrito para que coincida con la cantidad que ya hay en el carrito, y si no encuentra el item en el carrito, pondra 1 */}
            </div>
        )
    }
}

export default ItemDetailContainer