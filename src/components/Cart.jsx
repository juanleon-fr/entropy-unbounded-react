import CartListMap from './CartListMap';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Cart = () => {
	const cartGlobalContext = useContext(CartContext);
	return (
		<section>
			<CartListMap />
			<button onClick={() => cartGlobalContext.clear()}>Vaciar Carrito</button>
		</section>
	);
};

export default Cart;
