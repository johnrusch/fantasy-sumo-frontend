import React from "react";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Line } from 'react-chartjs-2';

const WrestlerSpecs = observer((props) => {
  const store = useStore();
  const wrestler = store.selectedWrestler
  // const { id, name, age, img, currentRank, records } = store.selectedWrestler;

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

 
  // const tournaments = records.map(record => {
  //   return record.tournament
  // })

  // const wins = records.map(record => {
  //   return record.wins
  // })


  // const state = {
  //   labels: tournaments.reverse(),
  //   datasets: [
  //     {
  //       label: 'Wins',
  //       fill: false,
  //       lineTension: 0.5,
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: wins.reverse()
  //     }
  //   ]
  // }

  return (
    <div>
      {store.selectedWrestler ? (
        <Grid container component="main" className="grid-container">
          {console.log(props.wrestlerData)}
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="wrestler" alt={wrestler.name} src={wrestler.img} />}
              title={wrestler.name}
              subheader={wrestler.currentRank}
              className="Name"
            />
            <CardContent>
              <div className="Attributes">
                <div>
                  <p>Height: {wrestler.height} cm</p>
                </div>
                <div>
                  <p>Weight: {wrestler.weight} kg</p>
                </div>
                <div>
                  <p>Age: {wrestler.age}</p>
                </div>
                <div>
                  <p>Yusho (Tournament Wins): {wrestler.yusho}</p>
                </div>
              </div>
            </CardContent>
            <CardContent>
              <div className="Stable">
                <div>
                  <p>Stable: {wrestler.heya}</p>
                </div>
              </div>
            </CardContent>
            {/* <CardContent>
              <div className="Chart">
                <Line 
                  data={state}
                  options={{
                    title:{
                      display: true,
                      text: 'Past Tournaments',
                      fontSize: 20
                    },
                    legend: {
                      display: true,
                      position: 'right'
                    }
                  }}
                />
              </div>
            </CardContent> */}
          </Card>
        </Grid>
      ) : (
        props.history.push("/team/wrestlers")
      )}
    </div>
  );
});

export default WrestlerSpecs;
