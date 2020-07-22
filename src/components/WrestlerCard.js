import React from "react";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectWrestler } from '../actions/wrestlerActions'

const WrestlerCard = (props) => {
    const { selectWrestler, wrestlerData } = props
    const { id, name, img, currentRank } = wrestlerData

    return (
        <div>
            <Link to='/wrestler'>
                <div onClick={() => selectWrestler(wrestlerData)}>
                    <img src={img} alt="Sumo Wrestler" />
                    <h3>{name}</h3>
                    <h5>{currentRank}</h5>
                </div>
            </Link>
        </div>
    )
}

export default connect(null, { selectWrestler })(WrestlerCard);