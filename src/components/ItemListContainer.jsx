import ItemListMap from "./ItemListMap"
import itemListData from "../utils/json/itemListData.json";
import Delay from "../utils/ItemPromise";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        if (category) {
            Delay(itemListData.filter(item => item.category === category))
                .then(result => setProducts(result))
                .catch(err => console.log(err))
        }
        else {
            Delay(itemListData)
                .then(result => setProducts(result))
                .catch(err => console.log(err))
        }
    }, [category])

    return (
        <div className="itemlistcontainer">
            <div className="separator--blank"></div>
            <ItemListMap data={products} />
            <div className="separator--blank"></div>
        </div>
    );
};

export default ItemListContainer;