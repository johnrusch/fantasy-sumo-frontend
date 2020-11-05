import React from "react";
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react'
import { useStore } from '../../store';

const LeagueCard = observer((props) => {
  const { leagueData } = props;
  const { name, id, teams } = leagueData;
  const store = useStore();

  return (
    <div className="flexbox" onClick={() => store.selectLeague(leagueData)}>
    <Paper elevation={3}>
      <Link to="/league/standings">
        <ListItem>
          <ListItemText
            primary={name}
            // secondary={teams.length}
          /> 
        </ListItem>
      </Link>
    </Paper>
  </div>
  );
});

export default LeagueCard;
