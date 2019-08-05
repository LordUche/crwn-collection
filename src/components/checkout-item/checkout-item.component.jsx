import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
	const { imageUrl, name, quantity, price } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(item)}>❮</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(item)}>❯</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(item)}>
				✕
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItem(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
