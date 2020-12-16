import React from "react";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { observer } from 'mobx-react';
import { useStore } from '../store';
import Banzuke from './Banzuke';

const Draft = observer((props) => {
  const store = useStore();
  const { name, teams } = store.selectedLeague;

  return (
    <FirebaseDatabaseProvider>
      <div className="draftContainer">
        <Paper className="draftTeams"><Typography>Teams</Typography></Paper>
        <Paper className="draftWrestlers">
          <Banzuke />
        </Paper>
      </div>
    </FirebaseDatabaseProvider>
  );

});

export default Draft;
