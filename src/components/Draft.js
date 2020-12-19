import React from "react";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { observer } from 'mobx-react';
import { useStore } from '../store';
import Banzuke from './Banzuke';
import DraftTeams from './leagueComponents/DraftTeams';


const Draft = observer((props) => {
  const store = useStore();
  const { name, teams, id } = store.selectedLeague;

  return (
    <FirebaseDatabaseProvider>
      <div className="draftContainer">
        <Paper className="draftTeamsContainer">
          <DraftTeams teams={teams} key={id} />
        </Paper>
        <Paper className="draftWrestlersContainer">
          <Banzuke />
        </Paper>
      </div>
    </FirebaseDatabaseProvider>
  );

});

export default Draft;
