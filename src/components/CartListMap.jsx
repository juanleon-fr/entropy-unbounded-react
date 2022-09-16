import CartItemRender from './CartItemRender';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const CartListMap = () => {
	const cart = useContext(CartContext);
	console.log(cart.cartList)
	return (
		<section className='cartListContainer'>
			<ul>
				{cart.cartList.map((item) => (
					<CartItemRender key={item.id} item={item}></CartItemRender>
				))}
			</ul>
		</section>
	);
};

export default CartListMap;
