import React from "react";
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import { connect } from "react-redux";
import { selectLeague } from "../../actions/leagueActions";

const LeagueCard = (props) => {
  const { leagueData } = props;
  const { name, id, teams } = leagueData;

  return (
    <div className="flexbox" onClick={() => props.selectLeague(leagueData)}>
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
};

export default connect(null, { selectLeague })(LeagueCard);
