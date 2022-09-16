import SpecialBtn from './SpecialBtn';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, color, pictureUrl, routingtitle }) => {
	return (
		<div className='card bg-color-60 product--card box-shadow translate-on-hover' id={id}>
			<div className='product--card__img'>
				<img src={pictureUrl} alt={title} />
				<p className='color-60 bg-color-30 precio'>${price}</p>
			</div>
			<div className='product--card__data'>
				<div className='product--card__data__details'>
					<h3 className='color-30'>{title}</h3>
					<h4 className='color-30'>{color}</h4>
				</div>
				<Link to={`/item/${routingtitle}`}><SpecialBtn color='color-30'>Detalles</SpecialBtn></Link>
			</div>
		</div>
	);
};

export default Item;
