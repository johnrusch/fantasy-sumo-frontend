import React, { Component } from "react";
import TeamCard from "./TeamCard";

import { connect } from "react-redux";

import { fetchTeams } from "../../actions/teamActions"

class Teams extends Component {
  userTeams = () => {
    const currentUser = this.props.currentUser;
    return this.props.teams.filter((team) => {
      return team.user.id === currentUser.id;
    });
  };

  renderTeams = () => {
    return this.userTeams().map((team) => {
      return <TeamCard teamData={team} />;
    });
  };

  componentDidMount() {
    this.props.fetchTeams()
  }

  render() {
    return (
    <div>
      <h4 className="center">My Teams</h4> 
      {this.renderTeams()}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth,
    teams: state.teams.teams,
  };
};

export default connect(mapStateToProps, { fetchTeams })(Teams);
