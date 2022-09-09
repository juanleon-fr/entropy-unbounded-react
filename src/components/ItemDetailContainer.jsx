import ItemDetail from './ItemDetail';
import Delay from '../utils/ItemPromise';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import products from '../utils/json/itemListData.json';

const ItemDetailContainer = () => {

    const { routingtitle } = useParams();

    console.log({routingtitle})

    let [product, setProduct] = useState({});
    console.log({product})
    useEffect(() => {
        Delay(products.find(element => element.routingtitle === routingtitle))
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [routingtitle])

    console.log({product})
    if (product.title) {
        return (
            <div className="itemDetailContainer card">
                <ItemDetail data={product} initial={1} />
            </div>
        )
    }
}

export default ItemDetailContainer