import React, { Component } from "react";
import AuthHOC from "../HOCs/AuthHOC";
import { Route, Switch, NavLink } from "react-router-dom";
import { api } from "../services/api";
import Leagues from "../components/Leagues"
class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavLink to="/dashboard/leagues">My Leagues</NavLink>
        <Route
          path="/dashboard/leagues"
          render={(props) => (
            <Leagues {...props} 
            currentUser={this.props.currentUser} />
          )}
        />
      </div>
    );
  }
}

export default AuthHOC(Dashboard);
