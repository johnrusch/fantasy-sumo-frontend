import React from "react";
import Paper from "@material-ui/core/Paper";
import { observer } from 'mobx-react';
import { useStore } from '../store';
import Banzuke from './Banzuke';
import DraftTeams from './leagueComponents/DraftTeams';


const Draft = observer((props) => {
  const store = useStore();
  const { name, teams, id } = store.selectedLeague;
  const { leagueCreator } = store.leagueCreator;

  return (
      <div className="draftContainer">
        {console.log('hey')}
        <h1>{name}</h1>
        <Paper className="draftTeamsContainer">
          <DraftTeams teams={teams} key={id} />
        </Paper>
        <Paper className="draftWrestlersContainer">
          <Banzuke />
        </Paper>
      </div>
  );

});

export default Draft;
