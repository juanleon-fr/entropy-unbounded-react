const CartItemRender = (item) => {
	let totalPrice = (item.item.price) * (item.item.quantity);
	console.log(item)
	return (
		<li>
			<div className='card cartItem' id={`cart-item-${item.item.id}`}>
				<div className='cartItemImg'><img src={item.item.pictureUrl} alt={item.item.title} /></div>
				<div className='cartItemDetails'>
					<div className='title-color'>
						<span className='title'>{item.item.title}</span>
						<span className='color'>{item.item.color}</span>
					</div>
					<div className='unit-price'>
						<span className='uppertext'>Precio Uni.</span>
						<span>{item.item.price}</span>
					</div>
					<div className='quantity'>
						<span className='uppertext'>Cant.</span>
						<span>{item.item.quantity}</span>
					</div>
					<div className='price'>
						<span className='uppertext'>Precio</span>
						<span>{totalPrice}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItemRender;
