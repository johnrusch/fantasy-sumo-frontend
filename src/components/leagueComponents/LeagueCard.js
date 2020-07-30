import React from "react";
import { Link, Route } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import { connect } from "react-redux";
import { selectLeague } from "../../actions/leagueActions";

const LeagueCard = (props) => {
  const { leagueData } = props;
  const { name, id, teams } = leagueData;

  return (
    <div onClick={() => props.selectLeague(leagueData)}>
      <Paper elevation={3}>
      <Link to="/league/standings">
        <ListItem>
          <ListItemText
            primary={name}
            secondary={teams.length}
          /> 
          {/* <div className="card-header">{name}</div>
          <div className="card-body">
            Number of teams: {teams.length}
          </div> */}
        </ListItem>
      </Link>
      </Paper>
      
    </div>
  );
};

export default connect(null, { selectLeague })(LeagueCard);
