import CartListMap from './CartListMap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { fsSetDocOrder, fsUpdateDoc } from '../utils/firebaseConfig';
import SpecialBtn from './SpecialBtn';

const Cart = () => {
	const global = useContext(CartContext);
	const createOrder = () => {
		let itemOrder = global.cartList.map((item) => ({
			id: item.id,
			title: item.title,
			price: item.price,
			quantity: item.quantity,
		}));
		let order = {
			buyer: {
				name: 'Ricardo Darín',
				email: 'darin_ricky57@wikileaks.com',
				phone: '5457575859',
			},
			date: serverTimestamp(),
			items: itemOrder,
			total: global.totalPrice,
		};
		fsSetDocOrder(order)
			.then((result) => alert(`Orden creada. \n Id: ${result.id}`))
			.catch((err) => console.log(err));
		global.cartList.forEach(async(item) => await fsUpdateDoc(item.id, item.quantity))
		global.clear();
	};
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
					<SpecialBtn onClick={() => createOrder()}>Finalizar compra</SpecialBtn>
					<SpecialBtn onClick={() => global.clear()}>Vaciar carrito</SpecialBtn>
					<button className='btn btn-color-10' onClick={() => createOrder()}>
						Finalizar Compra
					</button>
					<button className='btn btn-color-30' onClick={() => global.clear()}>
						Vaciar Carrito
					</button>
				</>
			)}
		</section>
	);
};

export default Cart;
