import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import itemListData from '../utils/json/itemListData.json';

function ItemCount(data) {
	const { title, stock, initial, id, setPassedCount } = data;
	let stockNum = Number(stock);
	let initialNum = Number(initial);

	const [count, setCount] = useState(initialNum);
	const global = useContext(CartContext);

	function onAdd(id, count) {
		// fsFetch()
		// 	.then((result) => result.find((item) => item.id === id))
		// 	.then();
		if (stockNum >= 1) {
			const item = itemListData.find((item) => item.id === id);
			setPassedCount(count);
			global.setQuantityState(global.quantityState + count);
			global.addItem(item, count);
		}
	}

	function itemAdder(op) {
		if (op === 'substract') {
			if (count > 1) {
				setCount(count - 1);
			}
		}
		if (op === 'add') {
			if (count < stockNum) {
				setCount(count + 1);
			}
		}
	}

	return (
		<div className='card itemcount'>
			<div className='itemName'>
				<p>{title}</p>
			</div>
			<div className='counter card'>
				<button onClick={() => itemAdder('substract')}>-</button>
				<div>
					<p>{count}</p>
				</div>
				<button onClick={() => itemAdder('add')}>+</button>
			</div>
			<button className='btn btn-color-30 width100' onClick={() => onAdd(id, count)}>
				Sumar al carrito
			</button>
		</div>
	);
}

export default ItemCount;
