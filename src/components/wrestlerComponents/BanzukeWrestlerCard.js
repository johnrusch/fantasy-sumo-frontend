import React from "react";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const BanzukeWrestlerCard = (props) => {
  const { wrestlerData } = props;

  return (
    <Paper >
      <ListItem>
        <ListItemAvatar>
          {wrestlerData.img && (
            <Avatar alt={wrestlerData.name} src={wrestlerData.img} />
          )}
        </ListItemAvatar>
        <ListItemText primary={wrestlerData.name} />
      </ListItem>
    </Paper>
  );
};

export default BanzukeWrestlerCard;
