import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart.component'
const Header = ({currentUser,hidden}) => {
    return(
 <div className="header">
      <Link className="logo-container" to="/">
       <Logo className="logo" /> 
      </Link>
      <div className="options">
      <Link className="option" to="/shop">
          SHOP
      </Link>
      <Link className="option" to="/shop">
          CONTACT
      </Link>

     {
         currentUser?
         <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
         :<Link className="option" to="signin"></Link>
     }
      <CartIcon />
      
     </div>{
       hidden?null: <Cart />
     }
     
    </div>
    )
}

const mapsStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
    })

export default connect(mapsStateToProps)(Header)