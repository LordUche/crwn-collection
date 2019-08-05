import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
	return (
		<div className="cart-icon">
			<ShoppingBagIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
