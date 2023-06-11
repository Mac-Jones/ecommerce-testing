import { createSlice } from '@reduxjs/toolkit';

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === productToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, productToRemove) =>
	cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

// export const setIsCartOpen = (boolean) =>
// 	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// export const addItemToCart = (cartItems, productToAdd) => {
// 	const newCartItems = addCartItem(cartItems, productToAdd);
// 	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const removeItemFromCart = (cartItems, productToRemove) => {
// 	const newCartItems = removeCartItem(cartItems, productToRemove);
// 	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const clearItemFromCart = (cartItems, productToRemove) => {
// 	const newCartItems = clearCartItem(cartItems, productToRemove);
// 	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: CART_INITIAL_STATE,
	reducers: {
		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		},
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart(state, action) {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart(state, action) {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
		},
	},
});

export const {
	setIsCartOpen,
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action) => {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
// 			return {
// 				...state,
// 				isCartOpen: payload,
// 			};
// 		case CART_ACTION_TYPES.SET_CART_ITEMS:
// 			return {
// 				...state,
// 				cartItems: payload,
// 			};
// 		default: {
// 			return state;
// 		}
// 	}
// };
