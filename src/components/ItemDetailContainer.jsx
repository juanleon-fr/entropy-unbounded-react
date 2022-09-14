import ItemDetail from './ItemDetail';
import Delay from '../utils/ItemPromise';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import products from '../utils/json/itemListData.json';

const ItemDetailContainer = () => {

    const { routingtitle } = useParams();
    let [product, setProduct] = useState({});
    useEffect(() => {
        Delay(products.find(element => element.routingtitle === routingtitle))
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [routingtitle])
    if (product.title) {
        return (
            <div className="itemDetailContainer">
                <ItemDetail data={product} initial={1} />
            </div>
        )
    }
}

export default ItemDetailContainer