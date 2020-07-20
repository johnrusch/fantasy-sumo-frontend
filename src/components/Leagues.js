import React, { Component } from "react";
import { api } from "../services/api";
import { Link, Route } from 'react-router-dom';
import LeagueCard from "./LeagueCard"
import LeagueStandings from "./LeagueStandings"


class Leagues extends Component {

    constructor(){
        super();
        this.state = {
            leagues: [],
            selectedLeagueId: 0
        }
    }
    
    renderLeagues = () => {
        const leagues = this.state.leagues
        return leagues.map(league => {
            return <LeagueCard onClick={this.handleClick} leagueData={league} />
        })
    }
    
    handleClick = (id) => {
        console.log(id)
        this.setState({
            selectedLeagueId: id
        })
        this.props.history.push("/leagues/standings")
    }

    selectedLeague = () => {
        return this.state.leagues.find(league => {
            return league.id === this.state.selectedLeagueId
        })
    }

    componentDidMount() {
        const currentUser = this.props.currentUser
        api.leagues.fetchUserLeagues().then(data => {
            return this.setState({
                leagues: data,
                selectedLeagueId: 0
            })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {!this.state.selectedLeagueId ? 
                    this.renderLeagues() 
                    :
                    <Route
                        path="/leagues/standings"
                        render={props => <LeagueStandings {...props} leagueData={this.selectedLeague()} />}
                    />}
                </ul>
            </div>
        )
    }
}

export default Leagues