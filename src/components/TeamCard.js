import React, { Component } from "react";
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    const { teamData, selectTeam } = props

    return (
        <div>
            <Link to='/team/wrestlers'>
                <div onClick={() => selectTeam(teamData.id)}>
                    <li>
                        <h3>{teamData.name} - Points: {teamData.points}</h3>
                    </li>
                </div>
            </Link>
        </div>
    )

}

export default TeamCard;