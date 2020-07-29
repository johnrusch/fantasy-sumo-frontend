import React from "react";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectTeam } from '../../actions/teamActions';

const TeamCard = (props) => {
    const { teamData, selectTeam } = props

    return (
        <div className="card" onClick={() => selectTeam(teamData)}>
            <Link to='/team/wrestlers'>
                <div className="card-header">
                    <h4>{teamData.name}</h4>
                </div>
                <div className="card-body">
                    <p>Points: {teamData.points}</p>
                </div>
            </Link>
        </div>
    )
}

export default connect(null, { selectTeam })(TeamCard);