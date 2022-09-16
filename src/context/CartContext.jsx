import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addItem = (item, quantity) => {
		let cartItem = { ...item, quantity };
		console.log({item})
		console.log({cartItem})
		if (isInCart(item.id)) {
			let abc = 1;
			console.log(abc);
		} else setCartList([...cartList, cartItem]);
	};

	const removeItem = (id) => {
		let newCartList = cartList.filter((item) => item.id !== id);
		setCartList(newCartList);
	};

	const clear = () => {
		setCartList([]);
	};

	const isInCart = (id) => {
		if (cartList.find((item) => item.id === id)) return true;
		else return false;
	};

	return <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
