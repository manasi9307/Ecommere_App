import React from 'react';
import {Homepage} from './pages/homepage/homepage';
import {Switch,Route,Redirect} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header'
import SignIn from './pages/signin/signin';
import {connect} from 'react-redux';
import './App.css';
import {auth, createUserProfileDoc} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'
import { async } from 'q';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector'
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

unsubscribeFromAuth=null;

componentDidMount(){
  const {setCurrentUser} = this.props; 
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef= await createUserProfileDoc(userAuth);
      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
      
      })
      
    } else {
      setCurrentUser(userAuth
      )
    }
  })
}


componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/signin' render={() =>this.props.currentUser? (<Redirect to="/" />): (<SignIn></SignIn>)} />
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
