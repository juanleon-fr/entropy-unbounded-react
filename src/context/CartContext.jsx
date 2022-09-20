import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
	const [cartIsEmpty, setCartIsEmpty] = useState(true);
	const [totalCount, setTotalCount] = useState(0);
	const [quantityState, setQuantityState] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);


	const addItem = (item, quantity) => {
		if (!isInCart(item.id)) {
			let cartItem = { ...item, quantity };
			setCartList([...cartList, cartItem]);
			alert(`${cartItem.quantity} x ${item.title} agregado al carrito. id: ${item.id}`);
			setCartIsEmpty(false);
			setTotalCount(totalCount + cartItem.quantity);
			setTotalPrice(totalPrice + cartItem.price * cartItem.quantity)
		} else {
		}
	};

	const removeItem = (id) => {
		let newCartList = cartList.filter((item) => item.id !== id);
		let deleted = cartList.filter((item) => item.id === id);
		console.log({deleted});
		setQuantityState(0);
		console.log({quantityState})
		setCartList(newCartList);
		if (cartList === []) console.log('epaa el carrito esta vacio');
		console.log({cartIsEmpty})
	};

	const clear = () => {
		setCartList([]);
		setCartIsEmpty(true);
		setTotalPrice(0);
		setTotalCount(0);
		setQuantityState(0);
	};

	const isInCart = (id) => {
		if (cartList.find((item) => item.id === id)) return true;
		else return false;
	};

	return <CartContext.Provider value={{ cartList, addItem, removeItem, clear, cartIsEmpty, totalCount, setQuantityState, quantityState, totalPrice }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
