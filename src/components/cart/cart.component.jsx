import React from 'react';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'


import {CustomButton} from '../custom-button/custom-button';
import './cart.scss';


const Cart = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
         <div className="cart-items">
         {
             cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))
            
         }
         </div>
         <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapsStateToProps = (state) => ({
    cartItems:selectCartItems(state)
})

export default connect(mapsStateToProps)(Cart);