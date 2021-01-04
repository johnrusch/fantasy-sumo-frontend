import React from "react";
import { Link } from "react-router-dom";
import LeagueCard from "./LeagueCard";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const Leagues = observer(() => {
  const store = useStore();

  const renderUserLeagues = () => {
    const leagues = store.userLeagues;
    return leagues.map((league) => {
      return (
        <LeagueCard selectLeague={store.selectLeague} leagueData={league} key={league.id}/>
      );
    });
  };

    return (
      <div className="container">
        <h4 style={{textAlign: "center"}}>My Leagues</h4>
        {store.userLeagues && renderUserLeagues()}
        <Paper elevation={3} style={{textAlign: "center"}}>
          <Button>
          <Link to="/league/new">Create New League</Link>
          </Button>
        </Paper>
      </div>
    );
});

export default Leagues;
