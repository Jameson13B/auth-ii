import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import axios from 'axios';

import Signup from './Signup';
import Signin from './Signin';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
