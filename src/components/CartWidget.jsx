import ShopIcon from '../assets/icons/cart-icon.svg';

const CartWidget = () => {
    return (
        <div className='shop-icon'>
            <img src={ShopIcon} alt='Carrito' />
            <p className='shop-number'>6</p>
        </div>
    );
};

export default CartWidget;