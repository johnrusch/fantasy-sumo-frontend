import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const CreateLeague = observer((props) => {
  //new league state
  const store = useStore();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //collects new league into object for post request
  const newLeague = {
    name: name,
    passphrase: password,
    closed: false,
    creator_id: store.currentUserID,
  };

  //new league state handlers
  const updateName = (username) => {
    return setName(username);
  };

  const updatePassword = (leaguePassword) => {
    return setPassword(leaguePassword);
  };

  const updateConfirmPassword = (leaguePassword) => {
    return setConfirmPassword(leaguePassword);
  };

  //onSubmit event handler
  const addLeague = (e) => {
    e.preventDefault();
    store.addLeague(newLeague);
    console.log(store.newestLeague);
  };

  //on component update checks to see if passwords match
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });
  });

  //modal state
  const [modalStyle] = useState(getModalStyle);

  //modal styling
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const open = store.newLeagueSuccessModal;

  const handleClose = () => {
    store.setNewLeagueSuccessModal();
  };

  return (
    <div>
      <ValidatorForm onSubmit={addLeague}>
        <TextValidator
          id="leagueName"
          label="Name"
          value={name}
          onChange={(e) => updateName(e.target.value)}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <TextValidator
          id="leaguePassword"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <TextValidator
          id="confirmLeaguePassword"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => updateConfirmPassword(e.target.value)}
          validators={["required", "isPasswordMatch"]}
          errorMessages={["this field is required", "password mismatch"]}
        />
        <Button variant="contained" color="primary" type="submit">
          Create League
        </Button>
      </ValidatorForm>
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={() => handleClose()}
        >
          <div style={modalStyle} className={classes.paper}>
            You're ready to go! {store.newestLeague.name}
          </div>
        </Modal>
      </div>
    </div>
  );
});

export default CreateLeague;
