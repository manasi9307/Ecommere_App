import React from 'react';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-actions'


import {CustomButton} from '../custom-button/custom-button';
import './cart.scss';


const Cart = ({cartItems,history, dispatch}) => {
    return(
        <div className="cart-dropdown">
         <div className="cart-items">
         {
             cartItems.length?
             cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
              )) :
              <span className="empty-Message">Your Cart is Empty</span>
            
         }
         </div>
         <CustomButton onClick={()=> 
            {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapsStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapsStateToProps)(Cart));