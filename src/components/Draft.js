import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { observer } from "mobx-react";
import { useStore } from "../store";
// import { MemoizedBanzuke } from "./Banzuke";
import Banzuke from "./Banzuke";
import DraftTeams from "./leagueComponents/DraftTeams";
import Button from "@material-ui/core/Button";
import DraftTimer from "./miscComponents/DraftTimer";
import { startDraft } from "../actions/leagueActions";
import Typography from "@material-ui/core/Typography";
import TeamCard from './teamComponents/TeamCard';

const Draft = observer((props) => {
  const store = useStore();
  const { name, teams, id } = store.selectedLeague;
  const [draftOrder, setDraftOrder] = useState([]);
  const [currentDrafter, setCurrentDrafter] = useState(0);

  useEffect(() => {
    setDraftOrder(shuffleTeams(teams))
    props.cableApp.league = props.cableApp.cable.subscriptions.create(
      {
        channel: "LeaguesChannel",
        leagueID: id,
      },
      {
        received(data) {
          console.log(data.start);
        },
      }
    );
  }, []);

  const shuffleTeams = (teams) => {
    let unshuffledLength = teams.length,
      t,
      i;

    while (unshuffledLength) {
      i = Math.floor(Math.random() * unshuffledLength--);

      //t is last element
      t = teams[unshuffledLength];
      teams[unshuffledLength] = teams[i];
      teams[i] = t;
    }

    return teams;
  };

  const renderTeams = (teams) => {
    return teams.map((team) => {
      return <TeamCard teamData={team} key={team.id} />;
    });
  };

  return (
    <div className="draftContainer">
      <h1>{name}</h1>
      <Paper className="draftTeamsContainer">
        {store.selectedLeague.creator_id === store.currentUserID ? (
          <Button onClick={() => startDraft({ leagueID: id })}>
            Start Draft
          </Button>
        ) : null}
        <DraftTimer />
        <div className="draftTeams">
          <div className="draftTeamsHeader">
            <Typography>Teams</Typography>
          </div>
          <div className="draftTeamsList">{teams && renderTeams(draftOrder)}</div>
        </div>
      </Paper>
      <Paper className="draftWrestlersContainer">
        <Banzuke />
      </Paper>
    </div>
  );
});

export default Draft;
