import React, { Component } from "react";
import LeagueCard from "./LeagueCard";
import CreateLeagueModal from "./CreateLeagueModal";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import { connect } from "react-redux";

import { fetchLeagues } from "../../actions/leagueActions"

class Leagues extends Component {
  renderLeagues = () => {
    const leagues = this.props.leagues;
    return leagues.map((league) => {
      return (
        <LeagueCard selectLeague={this.selectLeague} leagueData={league} />
      );
    });
  };

  componentDidMount() {
    this.props.fetchLeagues()
  }

  render() {

    return (
          <div>
              <h4 className="center">My Leagues</h4>
              {this.props.leagues && this.renderLeagues()}
              {<CreateLeagueModal />}
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

export default connect(mapStateToProps, { fetchLeagues })(Leagues);
