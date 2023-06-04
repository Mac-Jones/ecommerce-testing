import { useDispatch, useSelector } from 'react-redux';

import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from '../../store/cart/cart.action';
import './checkout-item.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));
	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt='checkout-item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<span className='arrow' onClick={addItemHandler}>
					&#10095;
				</span>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
