import React from 'react';
import {Homepage} from './pages/homepage/homepage';
import {Switch,Route} from 'react-router-dom';

import './App.css';

const Hats = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
