import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectTeam } from '../actions/teamActions';

const TeamCard = (props) => {
    const { teamData, selectTeam } = props

    return (
        <div>
            <Link to='/team/wrestlers'>
                <div onClick={() => selectTeam(teamData)}>
                    <li>
                        <h3>{teamData.name} - Points: {teamData.points}</h3>
                    </li>
                </div>
            </Link>
        </div>
    )
}

export default connect(null, { selectTeam })(TeamCard);