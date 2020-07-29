import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userActions';

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

const SimpleModal = props => {
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
      props.deleteUser(props.currentUserId)
      props.history.push("/login")
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Delete Account
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Delete Account</h2>
          <p>
            Are you sure you want to delete your account?
          </p>
          <Button variant="contained" color="primary" onClick={handleDelete}>
            Yes
          </Button>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        currentUserId: state.auth.id
    }
}

export default connect(mapStateToProps, { deleteUser })(SimpleModal);
