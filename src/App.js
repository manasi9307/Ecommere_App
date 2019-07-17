import React from 'react';
import {Homepage} from './pages/homepage/homepage';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import {Header} from './components/header/header'
import SignIn from './pages/signin/signin';
import './App.css';
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import { async } from 'q';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }

unsubscribeFromAuth=null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef= await createUserProfileDoc(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
       console.log(this.state)
      })
      
    } else {
      this.setState({
        currentUser:userAuth
      })
    }
  })
}


componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
  }
}


export default App;
