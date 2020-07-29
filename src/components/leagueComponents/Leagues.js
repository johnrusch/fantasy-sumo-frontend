import React, { Component } from "react";
import LeagueCard from "./LeagueCard";
import CreateLeagueModal from './CreateLeagueModal'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from "react-redux";

class Leagues extends Component {
  renderLeagues = () => {
    const leagues = this.props.leagues;
    return leagues.map((league) => {
      return (
        <LeagueCard selectLeague={this.selectLeague} leagueData={league} />
      );
    });
  };

  render() {
    return (
      <div>
          <Grid container className="bigger">
            <Typography variant="h6" >
              Leagues
            </Typography>
            <div>
              <List className="center">
                {this.renderLeagues()}
                {<CreateLeagueModal />}
              </List>
            </div>
          </Grid>
          {/* <div>
            <ul>{this.renderLeagues()}</ul>
            <CreateLeagueModal />
          </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leagues.leagues,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Leagues);
