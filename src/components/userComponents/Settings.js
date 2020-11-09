import React from "react";
import { Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import EditUserForm from "./EditUserForm";
import DeleteUserModal from "./DeleteUserModal";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const Settings = observer((props) => {
  const store = useStore();
  const handleClick = (id) => {
    props.deleteUser(id);
    props.history.push("/login");
  };

  return (
    <div>
      <Grid>
        <Card alignItems="flex-start">
          <Paper elevation={3}>
            <EditUserForm {...props} />
            {/* <Button className="btn btn-danger" onClick={() => handleClick(props.currentUserId)}>Delete Account</Button> */}
            <DeleteUserModal {...props} />
          </Paper>
        </Card>
      </Grid>
    </div>
  );
});

export default Settings;
