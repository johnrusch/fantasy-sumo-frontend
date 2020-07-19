import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'

class App extends Component {

  render() {
    return (
      <div>
        <Route
          exact
          path="/login"
          render={props => <Login {...props} />}
        />
      </div>
    )
  }
}

export default App;
