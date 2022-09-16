import ItemCount from './ItemCount';
import SpecialBtn from './SpecialBtn';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ data, initial }) => {
	const [PassedCount, setPassedCount] = useState(0);
	const { title, color, price, pictureUrl, description, stock, id } = data;
	let component;
	PassedCount === 0
		? (component = <ItemCount title={title} stock={stock} initial={initial} id={id} setPassedCount={setPassedCount} />)
		: (component = (
				<Link to='/cart'><SpecialBtn color='color-10'>Checkout</SpecialBtn></Link>
		  ));

	return (
		<div className='itemDetailCard card'>
			<img src={pictureUrl} alt={title} />
			<div className='itemDetailData'>
				<h3 className='itemTitle'>{title}</h3>
				<span className='color'>{color}</span>
				<span className='price'>${price}</span>
				<p className='description'>{description}</p>
				{component}
			</div>
		</div>
	);
};

export default ItemDetail;
