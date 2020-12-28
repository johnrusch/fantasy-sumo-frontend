import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { observer } from "mobx-react";
import { useStore } from "../../store";

const LeagueCard = observer((props) => {
  const { leagueData } = props;
  const { name } = leagueData;
  const store = useStore();


  return (
    <div onClick={() => store.selectLeague(leagueData)}>
      <Paper elevation={3}>
        <Link to={`/league/${leagueData.id}`} width="75%">
          <ListItem>
            <ListItemText
              primary={name}
              // secondary={teams.length}
            />
          </ListItem>
        </Link>
        {!leagueData.closed ? (
            <Button>
              <Link to={`/draft/${leagueData.id}`}>Start Draft</Link>
            </Button>
        ) : null}
        {leagueData.creator_id === store.currentUserID ? (
          <Button onClick={() => {navigator.clipboard.writeText(`localhost:3000/invite/${leagueData.id}`)}} color="primary">Copy Invitation Link</Button>
        ) : null}
      </Paper>
    </div>
  );
});

export default LeagueCard;
