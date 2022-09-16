import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			alert('El producto ya se encuentra en el carito. Remuévalo desde la sección carrito y vuelva a agregarlo');
		} else {
			let cartItem = { ...item, quantity };
			{
				setCartList([...cartList, cartItem]);
				alert(`${cartItem.quantity} x ${item.title} agregado al carrito. id: ${item.id}`);

			}
		}
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
