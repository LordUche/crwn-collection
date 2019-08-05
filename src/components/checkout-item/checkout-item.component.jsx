import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem }) => {
	const { imageUrl, name, quantity, price } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => removeItem(item)}>
				✕
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({ removeItem: item => dispatch(removeItem(item)) });

export default connect(null, mapDispatchToProps)(CheckoutItem);
