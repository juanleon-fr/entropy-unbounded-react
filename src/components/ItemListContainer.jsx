import ItemListMap from "./ItemListMap"
import itemListData from "../utils/json/itemListData.json";
import desafio from "../utils/ItemPromise";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        desafio(itemListData)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="itemlistcontainer">
            <div className="separator--blank"></div>
            <ItemListMap data={products}/>
            <div className="separator--blank"></div>
        </div>
    );
};

export default ItemListContainer;