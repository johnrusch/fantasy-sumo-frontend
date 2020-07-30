import React, { Component } from "react";
import LeagueCard from "./LeagueCard";
import CreateLeagueModal from "./CreateLeagueModal";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

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
      <div className="center">
        <Grid container className="bigger container-fluid">
          <div>
            <List className="center">
              {this.props.leagues && this.renderLeagues()}
              {<CreateLeagueModal />}
            </List>
          </div>
        </Grid>
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
