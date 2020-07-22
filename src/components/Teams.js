import React, { Component } from "react";
import { api } from "../services/api";
import { Route } from 'react-router-dom';
import TeamCard from "./TeamCard";
import TeamWrestlers from "./TeamWrestlers";

import { connect } from 'react-redux';

class Teams extends Component {

    userTeams = () => {
        const currentUser = this.props.currentUser
        return this.props.teams.filter(team => {
            console.log(team.user)
            return team.user.id === currentUser.id
        })
    }

  renderTeams = () => {
    return this.userTeams().map((team) => {
      return <TeamCard teamData={team} />;
    });
  };

  render() {
    return (
      <div>
        
          {this.renderTeams()}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth,
    teams: state.teams.teams
  }
}

export default connect(mapStateToProps)(Teams);
