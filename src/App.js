import React, { Component } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";
import { api } from "./services/api";
import Login from "./components/Login";
import Dashboard from "./containers/Dashboard";
import NavBar from "./containers/NavBar";
import Leagues from "./components/Leagues";
import LeagueStandings from './components/LeagueStandings'
import Teams from "./components/Teams";
import TeamCard from "./components/TeamCard";
import TeamWrestlers from "./components/TeamWrestlers";
import WrestlerSpecs from "./components/WrestlerSpecs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {},
      },
      wrestlers: {},
      selectedWrestler: "",
      teams: [],
      selectedTeam: "",
      leagues: [],
      selectedLeague: "",
    };
  }

  onLogin = (data) => {
    const updatedState = {
      ...this.state.auth,
      user: { id: data.id, name: data.name },
    };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  };

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  selectWrestler = (id) => {
    const wrestler = this.state.wrestlers.find(
      (wrestler) => wrestler.id === id
    );
    this.setState({
      selectedWrestler: wrestler,
    });
  };

  fetchAllWrestlers = () => {
    api.wrestlers.fetchAllWrestlers().then((allWrestlers) => {
      this.setState({
        wrestlers: allWrestlers,
      });
    });
  };

  selectTeam = (id) => {
    const team = this.state.teams.find((team) => {
      return team.id === id;
    });
    this.setState({
      selectedTeam: team,
    });
  };

  fetchAllTeams = () => {
    api.teams.fetchAllTeams().then((allTeams) => {
      this.setState({
        teams: allTeams,
      });
    });
  };

  selectLeague = (id) => {
    const league = this.state.leagues.find((league) => {
      return league.id === id;
    });
    this.setState({
      selectedLeague: league,
    });
  };

  fetchUserLeagues = () => {
    api.leagues.fetchUserLeagues().then(userLeagues => {
      this.setState({
        leagues: userLeagues
      })
    })
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      console.log("getting user from app.js");
      api.auth.getCurrentUser().then((user) => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({
          auth: updatedState,
          selectedWrestler: "",
        });
      });
    }
    this.fetchAllWrestlers();
    this.fetchAllTeams();
    this.fetchUserLeagues();
  }

  render() {
    const token = localStorage.getItem("token");
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
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} currentUser={this.state.auth.user} />
          )}
        />
        <Route
          path="/leagues"
          render={(props) => (
            <Leagues {...props} currentUser={this.state.auth.user} leagues={this.state.leagues} selectLeague={this.selectLeague}/>
          )}
        />
        <Route
          path="/league/standings"
          render={props => <LeagueStandings {...props} leagueData={this.state.selectedLeague} selectTeam={this.selectTeam}/>}
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
          path="/team"
          render={(props) => (
            <TeamCard {...props} teamData={this.state.selectedTeam} selectTeam={this.selectTeam}/>
          )}
        />
        <Route
          path="/team/wrestlers"
          render={(props) => (
            <TeamWrestlers
              {...props}
              teamData={this.state.selectedTeam}
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

export default App;
