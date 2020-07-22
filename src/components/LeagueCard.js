import React from "react";
import { Link, Route } from 'react-router-dom'

import { connect } from 'react-redux';
import { selectLeague } from '../actions/leagueActions';

const LeagueCard = (props) => {
    const { leagueData } = props
    const { name, id, teams } = leagueData


        return (
            <div >
                <Link to='/league/standings'>
                    <div onClick={() => props.selectLeague(leagueData)}>
                        {name}
                        {id}
                        {teams.length}
                    </div>
                </Link>
            </div>
        )
 

}

export default connect(null, { selectLeague })(LeagueCard);