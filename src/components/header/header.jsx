import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utils';
const Header = ({currentUser}) => {
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
      
     </div>
    </div>
    )
}

const mapsStateToProps = (state) => ({
    currentUser:state.user.currentUser
    })

export default connect(mapsStateToProps)(Header)