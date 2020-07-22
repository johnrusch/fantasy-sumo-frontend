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

  // onLogin = (data) => {
  //   const updatedState = {
  //     ...this.state.auth,
  //     user: { id: data.id, name: data.name },
  //   };
  //   localStorage.setItem("token", data.jwt);
  //   this.setState({ auth: updatedState });
  // };

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };


  componentDidMount() {

    // const token = localStorage.getItem("token");

    // if (token) {
    //   api.auth.getCurrentUser().then((user) => {
    //     const updatedState = { ...this.state.auth, user: user };
    //     this.setState({
    //       auth: updatedState,
    //       selectedWrestler: "",
    //     });
    //   });
    // }
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
          render={(props) => <Login {...props} onLogin={this.onLogin} />}
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
          render={(props) => (
            <Teams
              {...props}
              currentUser={this.state.auth.user}
              allTeams={this.state.teams}
              selectTeam={this.selectTeam}
            />
          )}
        />
        <Route
          path="/team/wrestlers"
          render={(props) => (
            <TeamWrestlers
              {...props}
              // teamData={this.props.selectedTeam}
              selectWrestler={this.selectWrestler}
            />
          )}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchWrestlers: () => dispatch(fetchWrestlers()),
//     fetchLeagues: () => dispatch(fetchLeagues()),
//     fetchTeams: () => dispatch(fetchTeams()),
//   }
// }

export default connect(mapStateToProps, { fetchWrestlers, fetchLeagues, fetchTeams, getCurrentUser })(App);
