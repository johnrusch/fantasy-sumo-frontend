import React from "react";
import { Link } from 'react-router-dom'
// import LeagueStandings from "./LeagueStandings";

const LeagueCard = (props) => {
    const { selectLeague, leagueData } = props
    const { name, id, teams } = leagueData
    
    

        return (
            <div >
                <Link to='/league/standings'>
                    <div onClick={props => selectLeague(id)}>
                        {name}
                        {id}
                        {teams.length}
                    </div>
                </Link>
            </div>
        )
 

}

export default LeagueCard;