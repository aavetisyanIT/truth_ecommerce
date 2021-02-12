import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import CartActionTypes from './../../redux/cart/cart.types';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import React from 'react';

function CartIcon({ toggleCartHidden }) {
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);