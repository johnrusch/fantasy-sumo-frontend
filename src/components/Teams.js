import React, { Component } from "react";
import { api } from "../services/api";
import TeamCard from './TeamCard'

class Teams extends Component {

    state = {
        teams: []
    }

    fetchUserTeams = () => {
        api.teams.fetchUserTeams().then(data => {
            this.setState({
                teams: data
            })
        })
    }

    renderTeams = () => {
        return this.state.teams.map(team => {
            return <TeamCard name={team.name} league={team.league} />
        })
    }

    componentDidMount() {
        this.fetchUserTeams()
    }

    render() {
        return (
            <div>
                {this.renderTeams()}
            </div>
        )
    }
}

export default Teams;