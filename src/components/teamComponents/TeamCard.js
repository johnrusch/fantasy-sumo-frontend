import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { selectTeam } from "../../actions/teamActions";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const TeamCard = (props) => {
  const { teamData, selectTeam } = props;

  return (
    <div onClick={() => selectTeam(teamData)}>
      <Paper elevation={3}>
        <Link to="/team/wrestlers">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              {teamData.user.avatar && (
                <Avatar alt={teamData.user.name} src={teamData.user.avatar} />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={teamData.name}
              secondary= {
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {teamData.user.name}
                  </Typography>
                  {` - Points: ${teamData.points}`}
                </React.Fragment>
              }
            />
           
          </ListItem>
        </Link>
      </Paper>
    </div>
  );
};

export default connect(null, { selectTeam })(TeamCard);
