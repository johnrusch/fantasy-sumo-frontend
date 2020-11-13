import React, { useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect } from "react-router-dom";

// import { connect } from "react-redux";
// import { fetchWrestlers } from "./actions/wrestlerActions";
// import { fetchUserLeagues, fetchOpenLeagues } from "./actions/leagueActions";
// import { fetchTeams } from "./actions/teamActions";
// import { getCurrentUser } from "./actions/authActions";

import NavBar from "./containers/NavBar";
import Login from "./components/userComponents/Login";
import SignUp from "./components/userComponents/SignUp";
import Settings from './components/userComponents/Settings';
import Leagues from "./components/leagueComponents/Leagues";
import LeagueStandings from "./components/leagueComponents/LeagueStandings";
import CreateLeague from "./components/leagueComponents/CreateLeague";
import Teams from "./components/teamComponents/Teams";
import TeamWrestlers from "./components/teamComponents/TeamWrestlers";
import WrestlerSpecs from "./components/wrestlerComponents/WrestlerSpecs";
import Rules from './components/Rules';
import IsLoadingHOC from './HOCs/IsLoadingHOC';
import LeagueInvitation from './components/leagueComponents/LeagueInvitation';


import { observer } from 'mobx-react';
import { useStore } from './store';

const App = observer(() => {
  const token = localStorage.getItem("token");
  const store = useStore();
  const loggedIn = store.loggedIn;

    return (
      <div>
        <>
          {!loggedIn ?
          <Redirect to="/login" /> 
          : 
          null }
        </>
        {store.retrievingData ?
        <IsLoadingHOC  />
        :
        <>
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={props => <SignUp {...props} />}
          />
          <Route path="/leagues" render={(props) => <Leagues {...props} />} />
          <Route
            path="/league/standings"
            render={(props) => <LeagueStandings {...props} />}
          />
          <Route path="/league/new" render={(props) => <CreateLeague {...props} />} />
          <Route path="/teams" render={(props) => <Teams {...props} />} />
          <Route
            path="/team/wrestlers"
            render={(props) => <TeamWrestlers {...props} />}
          />
          <Route
            path="/wrestler"
            render={(props) => <WrestlerSpecs {...props} />}
          />
          <Route 
            path="/rules"
            render={props => <Rules {...props} />}
          />
          <Route 
            path="/settings"
            render={props => <Settings {...props} />}
          />
          <Route
            path="/invite=:leagueId"
            render={props => <LeagueInvitation {...props} />}
          />
        </>
        }
      </div>
    );
});

export default App;
