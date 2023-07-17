import { FC, memo } from 'react';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

import { Name, ItemDetails, CartItemContainer } from './cart-item.styles';

type CartItemProps = {
	cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity} x ₱{price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
});

export default CartItem;
