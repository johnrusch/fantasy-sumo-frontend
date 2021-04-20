import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import { observer } from "mobx-react";
import { useStore } from "../../store";

const WrestlerCard = observer((props) => {
  const store = useStore();
  const { wrestlerData } = props;

  const openWrestlerModal = () => {
    store.selectWrestler(wrestlerData);
  }


  return (
    <div onClick={() => openWrestlerModal()} style={{cursor: 'pointer'}}>
      <Paper elevation={3}>
        <ListItem>
          <ListItemAvatar>
            {wrestlerData.img && (
              <Avatar alt={wrestlerData.name} src={wrestlerData.img} />
            )}
          </ListItemAvatar>
          <ListItemText
            primary={wrestlerData.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {wrestlerData.currentRank}
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemText className="right">
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {`Current Record: ${wrestlerData.currentWins} - ${wrestlerData.currentLosses}`}
              </Typography>
            </React.Fragment>
          </ListItemText>
        </ListItem>
      </Paper>
    </div>
  );
});

export default WrestlerCard;
