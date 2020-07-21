import React, { Component } from "react";
import { api } from "../services/api";
import { Route } from 'react-router-dom';
import TeamCard from "./TeamCard";
import TeamWrestlers from "./TeamWrestlers";

class Teams extends Component {

    userTeams = () => {
        const currentUser = this.props.currentUser
        return this.props.allTeams.filter(team => {
            console.log(team.user)
            return team.user.id === currentUser.id
        })
    }

  renderTeams = () => {
    return this.userTeams().map((team) => {
      return <TeamCard teamData={team} selectTeam={this.props.selectTeam}/>;
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

export default Teams;
