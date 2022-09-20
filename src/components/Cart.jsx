import CartListMap from './CartListMap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const global = useContext(CartContext);
	return (
		<section>
			{global.cartIsEmpty ? (
				<>
					<span>
						El carrito está vacío. haga click <Link to='/'>aquí</Link> para ir a la lista de artículos
					</span>
				</>
			) : (
				<>
					<CartListMap />
					<span>Total: ${global.totalPrice}</span>
					<button className='btn btn-color-10' onClick={() => global.clear()}>Terminar Compra</button>
					<button className='btn btn-color-30' onClick={() => global.clear()}>Vaciar Carrito</button>
				</>
			)}
		</section>
	);
};

export default Cart;
