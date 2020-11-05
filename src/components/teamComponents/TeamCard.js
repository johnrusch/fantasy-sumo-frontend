import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const TeamCard = observer((props) => {
  const { teamData } = props;
  const store = useStore();

  return (
    <div className="flexbox" onClick={() => store.selectTeam(teamData)}>
      {console.log(teamData)}
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
              secondary={
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
            {window.location.href === "/league/standings" ? null : (
              <ListItemText>
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {`League: ${teamData.league.name}`}
                  </Typography>
                </React.Fragment>
              </ListItemText>
            )}
          </ListItem>
        </Link>
      </Paper>
    </div>
  );
});

export default TeamCard;
