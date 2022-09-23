import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fsFetchDocById } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
	const { id } = useParams();
	let [product, setProduct] = useState({});
	useEffect(() => {
		fsFetchDocById(id)
			.then((result) => setProduct(result))
			.catch((err) => console.log(err));
	}, [id]);
	if (product.title) {
		return (
			<div className='itemDetailContainer'>
				<ItemDetail data={product} initial={1} />
			</div>
		);
	}
};

export default ItemDetailContainer;
