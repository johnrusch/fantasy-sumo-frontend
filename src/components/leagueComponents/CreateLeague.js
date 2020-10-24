import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { connect } from "react-redux";
import { createLeague } from '../../actions/leagueActions'
import LeagueSuccessModal from "./LeagueSuccessModal";



const CreateLeague = (props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [teams, setTeams] = useState("");

  const newLeague = {
    name: name,
    passphrase: password,
    closed: false,
    creator_id: props.currentUserId,
  };

  const updateName = (username) => {
    return setName(username);
  };

  const updatePassword = (leaguePassword) => {
    return setPassword(leaguePassword);
  };

  const updateConfirmPassword = (leaguePassword) => {
    return setConfirmPassword(leaguePassword);
  };

  const addLeague = (e) => {
    e.preventDefault();
    // console.log(newLeague);
    props.createLeague(newLeague);
    if (!props.errors) return <LeagueSuccessModal {...props} />
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== password) {
          return false;
      }
      return true;
  });
  })

  return (
    <div>
      
        <div>
          {/* <h2>Create a new league</h2> */}
          <ValidatorForm
            onSubmit={addLeague}
          >
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
              validators={["required", 'isPasswordMatch']}
              errorMessages={["this field is required", 'password mismatch']}
            />
            <Button variant="contained" color="primary" type="submit">
              Create League
            </Button>
          </ValidatorForm>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.id,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { createLeague })(CreateLeague);
