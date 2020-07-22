import React, { Component } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";

import { connect } from 'react-redux'
import { fetchWrestlers } from './actions/wrestlerActions'
import { fetchLeagues } from './actions/leagueActions'
import { fetchTeams } from './actions/teamActions'
import { getCurrentUser } from './actions/authActions';

import { api } from "./services/api";
import Login from "./components/Login";
// import Dashboard from "./containers/Dashboard";
import NavBar from "./containers/NavBar";
import Leagues from "./components/Leagues";
import LeagueStandings from './components/LeagueStandings'
import Teams from "./components/Teams";
// import TeamCard from "./components/TeamCard";
import TeamWrestlers from "./components/TeamWrestlers";
import WrestlerSpecs from "./components/WrestlerSpecs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {},
      }
    };
  }

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };


  componentDidMount() {
    console.log(this.props.getCurrentUser());
    this.props.getCurrentUser();
    this.props.fetchWrestlers();
    this.props.fetchLeagues();
    this.props.fetchTeams();
  }

  render() {
    const token = localStorage.getItem("token");
    console.log(this.props)
    return (
      <div>
        <NavBar
          currentUser={this.state.auth.user}
          handleLogout={this.onLogout}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/leagues"
          render={(props) => (
            <Leagues {...props} />
          )}
        />
        <Route
          path="/league/standings"
          render={props => <LeagueStandings {...props} />}
        />
        <Route
          path="/teams"
          render={(props) => <Teams {...props}/>}
        />
        <Route
          path="/team/wrestlers"
          render={(props) => <TeamWrestlers {...props} />}
        />
        <Route
          path="/wrestler"
          render={(props) => (
            <WrestlerSpecs
              {...props}
              wrestlerData={this.state.selectedWrestler}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wrestlers: state.wrestlers,
    loading: state.loading,
    selectedLeague: state.leagues.selectedLeague,
    leagues: state.leagues.leagues,
    teams: state.teams.teams,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchWrestlers, fetchLeagues, fetchTeams, getCurrentUser })(App);
