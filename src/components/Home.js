import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Banzuke from './Banzuke';

const Home = observer((props) => {
  const store = useStore();

  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <Paper><Typography>Welcome back, {store.currentUserName}!</Typography></Paper>
        </div>
      <div className="homeLeftColumn">
        <Paper>
          
        </Paper>
      </div>
      <div className="homeBanzuke">
        <Paper>
          <Banzuke />
        </Paper>
      </div>
    </div>
  );
});

export default Home;
