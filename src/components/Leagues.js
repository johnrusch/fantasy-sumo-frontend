import React, { Component } from "react";
import { api } from "../services/api";
import { Link, Route } from "react-router-dom";
import LeagueCard from "./LeagueCard";
import LeagueStandings from "./LeagueStandings";

import { connect } from "react-redux";

class Leagues extends Component {

  renderLeagues = () => {
        const leagues = this.props.leagues;
        return leagues.map((league) => {
          return (
            <LeagueCard
              selectLeague={this.selectLeague}
              leagueData={league}
            />
          );
        });
  };

  render() {
    return (
      <div>
        <ul>{this.renderLeagues()}</ul>
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
