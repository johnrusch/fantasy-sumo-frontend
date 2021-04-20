import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { observer } from "mobx-react";
import { useStore } from "../store";
// import { MemoizedBanzuke } from "./Banzuke";
import Banzuke from './Banzuke'
import DraftTeams from "./leagueComponents/DraftTeams";
import Button from "@material-ui/core/Button";
import DraftTimer from "./miscComponents/DraftTimer";
import { startDraft } from "../actions/leagueActions"

const Draft = observer((props) => {
  const store = useStore();
  const { name, teams, id } = store.selectedLeague;

  
  useEffect(() => {
    props.cableApp.league = props.cableApp.cable.subscriptions.create({
      channel: "LeaguesChannel",
      leagueID: id,
    }, {
    received(data) {

      console.log(data.start);
    }});
  }, []);

  return (
    <div className="draftContainer">
      <h1>{name}</h1>
      <Paper className="draftTeamsContainer">
        {store.selectedLeague.creator_id === store.currentUserID ? (
          <Button onClick={() => startDraft({leagueID: id})}>Start Draft</Button>
        ) : null}
        <DraftTimer />
        <DraftTeams teams={teams} key={id} />
      </Paper>
      <Paper className="draftWrestlersContainer">
        <Banzuke  draftBanzuke={true} />
      </Paper>
    </div>
  );
});

export default Draft;
