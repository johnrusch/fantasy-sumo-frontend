import React from "react";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Paper from "@material-ui/core/Paper";
import { observer } from 'mobx-react';
import { useStore } from '../store';
import Banzuke from './Banzuke';

const Draft = observer((props) => {
  const store = useStore();
  const { name, teams } = store.selectedLeague;

  return (
    <FirebaseDatabaseProvider>
      <div className="draftContainer">
        <Paper className="draftTeams">Teams</Paper>
        <Paper className="draftWrestlers">
          <Banzuke />
        </Paper>
      </div>
    </FirebaseDatabaseProvider>
  );

});

export default Draft;
