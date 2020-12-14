import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react'
import { useStore } from '../../store';

const LeagueCard = observer((props) => {
  const { leagueData } = props;
  const { name } = leagueData;
  const store = useStore();
  let userIsLeagueCreator = useRef(false);

  useEffect(() => {
    if (leagueData.creator_id === store.currentUserID) {
      userIsLeagueCreator = true;
    }
  })

  return (
    <div className="flexbox" onClick={() => store.selectLeague(leagueData)}>
    <Paper elevation={3}>
      <Link to= {`/league/${leagueData.id}`}>
        <ListItem>
          <ListItemText
            primary={name}
            // secondary={teams.length}
          /> 
        </ListItem>
      </Link>
      {userIsLeagueCreator && (
        <Button>
          <Link to= {`/draft/${leagueData.id}`} />
        </Button>)}
    </Paper>
  </div>
  );
});

export default LeagueCard;
