import React, { Component } from "react";
import LeagueCard from "./LeagueCard";
import CreateLeagueModal from "./CreateLeagueModal";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import { connect } from "react-redux";

import { fetchUserLeagues, fetchOpenLeagues } from "../../actions/leagueActions"

class Leagues extends Component {
  renderUserLeagues = () => {
    const leagues = this.props.userLeagues;
    return leagues.map((league) => {
      return (
        <LeagueCard selectLeague={this.selectLeague} leagueData={league} />
      );
    });
  };

  renderOpenLeagues = () => {
    const leagues = this.props.openLeagues;
    return leagues.map((league) => {
      if (!league.closed) {
        return (
          <LeagueCard selectLeague={this.selectLeague} leagueData={league} />
        );
      }
    });
  };

  componentDidMount() {
    this.props.fetchUserLeagues()
    this.props.fetchOpenLeagues()
  }

  render() {

    return (
          <div>
              <h4 className="center">My Leagues</h4>
              {this.props.userLeagues && this.renderUserLeagues()}
              <h4 className="center">Open Leagues</h4>
              {this.props.openLeagues && this.renderOpenLeagues()}
              {<CreateLeagueModal />}
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLeagues: state.leagues.userLeagues,
    openLeagues: state.leagues.openLeagues,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchUserLeagues, fetchOpenLeagues })(Leagues);
