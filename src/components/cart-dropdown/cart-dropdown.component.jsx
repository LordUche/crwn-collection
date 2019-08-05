import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>GOT TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
