import React, { useEffect } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Home from "./components/Home";
import Login from "./components/userComponents/Login";
import SignUp from "./components/userComponents/SignUp";
import Settings from "./components/userComponents/Settings";
import Leagues from "./components/leagueComponents/Leagues";
import LeagueStandings from "./components/leagueComponents/LeagueStandings";
import CreateLeague from "./components/leagueComponents/CreateLeague";
import Teams from "./components/teamComponents/Teams";
import TeamWrestlers from "./components/teamComponents/TeamWrestlers";
import WrestlerSpecs from "./components/wrestlerComponents/WrestlerSpecs";
import Rules from "./components/Rules";
import IsLoadingHOC from "./HOCs/IsLoadingHOC";
import LeagueInvitation from "./components/leagueComponents/LeagueInvitation";

import { observer } from "mobx-react";
import { useStore } from "./store";

const App = observer((props) => {
  const store = useStore();
  const loggedIn = store.loggedIn;

  useEffect(() => {
    if (!loggedIn) {
      store.getUser()
    }
  });

  return (
    <div>
      {store.retrievingData ? <IsLoadingHOC /> : null}
      {loggedIn ? <NavBar /> : null}
      <Switch>
        <Route
          path="/home"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <Home {...props} />
            );
          }}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/signup" render={(props) => <SignUp {...props} />} />
        <Route
          path="/league/:leagueId"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <LeagueStandings {...props} />
            );
          }}
        />
        <Route
          path="/league/new"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <CreateLeague {...props} />
            );
          }}
        />
        <Route
          path="/leagues"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <Leagues {...props} />
            );
          }}
        />
        <Route
          path="/team/:teamId"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <TeamWrestlers {...props} />
            );
          }}
        />
        <Route
          path="/teams"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <Teams {...props} />
            );
          }}
        />
        <Route
          path="/wrestler"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <WrestlerSpecs {...props} />
            );
          }}
        />
        <Route path="/rules" render={(props) => <Rules {...props} />} />
        <Route path="/settings" render={(props) => <Settings {...props} />} />
        <Route
          path="/invite/:leagueId"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <LeagueInvitation {...props} />
            );
          }}
        />
        <Route
          path="/"
          render={(props) => {
            return !loggedIn ? (
              <Redirect
                to={{ pathname: "/login", state: { from: window.location.pathname } }}
              />
            ) : (
              <Redirect to="/home" />
            );
          }}
        />
      </Switch>
    </div>
  );
});

export default App;
