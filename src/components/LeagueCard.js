import React from "react";
// import LeagueStandings from "./LeagueStandings";

const LeagueCard = (props) => {
    const { onClick, leagueData } = props
    const { name, id, teams } = leagueData
    
    

        return (
            <div >
                <li>
                    <div onClick={props => onClick(id)}>
                        {name}
                        {id}
                        {teams.length}
                    </div>
                </li>
            </div>
        )
 

}

export default LeagueCard;