import React from 'react';
import {Homepage} from './pages/homepage/homepage';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop';

import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
