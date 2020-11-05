import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { observer } from 'mobx-react';
import { useStore } from '../../store';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const WrestlerCard = observer((props) => {
  const store = useStore();
  const { wrestlerData } = props;
  // const { id, name, img, currentRank } = wrestlerData;

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    props.deleteUser(props.currentUserId);
    props.history.push("/login");
  };

  return (
    <div onClick={() => store.selectWrestler(wrestlerData)}>
      <Paper elevation={3}>
        <Link to="/wrestler">
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
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {`Current Record: ${wrestlerData.currentWins} - ${wrestlerData.currentLosses}`}
                  </Typography>
                </React.Fragment>
                
              
            </ListItemText>
          </ListItem>
        </Link>
      </Paper>
    </div>
  );
});

export default WrestlerCard;
