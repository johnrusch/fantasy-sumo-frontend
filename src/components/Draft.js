import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { observer } from "mobx-react";
import { useStore } from "../store";
import Banzuke from "./Banzuke";
import DraftTeams from "./leagueComponents/DraftTeams";
import Button from "@material-ui/core/Button";

const Draft = observer((props) => {
  const store = useStore();
  const { name, teams, id } = store.selectedLeague;
  const [online, setOnline] = useState(false);

  
  useEffect(() => {
    props.cableApp.league = props.cableApp.cable.subscriptions.create({
      channel: "LeaguesChannel",
      leagueID: id,
    }, {
    connected() {
      setOnline(true);
    }});
  });

  return (
    <div className="draftContainer">
      {console.log(props)}
      <h1>{name}</h1>
      <Paper className="draftTeamsContainer">
        {store.selectedLeague.creator_id === store.currentUserID ? (
          <Button color="primary">Start Draft</Button>
        ) : null}
        <DraftTeams teams={teams} key={id} />
      </Paper>
      <Paper className="draftWrestlersContainer">
        <Banzuke />
      </Paper>
    </div>
  );
});

export default Draft;
