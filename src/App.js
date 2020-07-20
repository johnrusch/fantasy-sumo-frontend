import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route } from 'react-router-dom'
import { api } from './services/api'
import Login from './components/Login'
import Dashboard from './containers/Dashboard'
import NavBar from './containers/NavBar'
import Leagues from './components/Leagues'
import Teams from './components/Teams'

class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: {
        user: {}
      }
    }
  }

  onLogin = data => {
    const updatedState = {...this.state.auth, user: {id: data.id, name: data.name}}
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState })
  }

  onLogout = () => {
    localStorage.removeItem("token")
    this.setState({ auth: { user: {} } })
  }

  componentDidMount() {
    const token = localStorage.getItem("token")

    if (token) {
      console.log("getting user from app.js")
      api.auth.getCurrentUser().then(user => {
        const updatedState = {...this.state.auth, user: user}
        this.setState({ auth: updatedState })
      })
    }
  }

  render() {
    const token = localStorage.getItem("token")
    return (
      <div>
        <NavBar
          currentUser={this.state.auth.user}
          handleLogout={this.onLogout}
        />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} onLogin={this.onLogin}/>}
        />
        <Route
          path="/dashboard"
          render={props => <Dashboard {...props} currentUser={this.state.auth.user} />}
        />
        <Route
          path="/leagues"
          render={props => <Leagues {...props} currentUser={this.state.auth.user} />}
        />
        <Route
          path="/teams"
          render={props => <Teams {...props} currentUser={this.state.auth.user} />}
        />
      </div>
    )
  }
}

export default App;
