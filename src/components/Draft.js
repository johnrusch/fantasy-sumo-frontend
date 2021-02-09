import React from "react";
import Paper from "@material-ui/core/Paper";
import { observer } from "mobx-react";
import { useStore } from "../store";
import Banzuke from "./Banzuke";
import DraftTeams from "./leagueComponents/DraftTeams";
import { ActionCableProvider } from "react-actioncable-provider";

const Draft = observer((props) => {
  const store = useStore();
  const { name, teams, id } = store.selectedLeague;

  return (
    <ActionCableProvider
      url={"ws://fantasy-sumo-backend.herokuapp.com/api/v1/cable"}
    >
      <div className="draftContainer">
        <h1>{name}</h1>
        <Paper className="draftTeamsContainer">
          <DraftTeams teams={teams} key={id} />
        </Paper>
        <Paper className="draftWrestlersContainer">
          <Banzuke />
        </Paper>
      </div>
    </ActionCableProvider>
  );
});

export default Draft;
