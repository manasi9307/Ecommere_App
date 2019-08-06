import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {countItems} from '../../redux/cart/cart.selectors';
import './cart-icon.scss';


const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapsDispatchToProps = dispatch => ({
toggleCartHidden:() => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount:countItems(state)
})
export default connect(mapStateToProps,mapsDispatchToProps)(CartIcon);