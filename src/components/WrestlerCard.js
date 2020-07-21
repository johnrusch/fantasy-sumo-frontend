import React from "react";
import { Link } from 'react-router-dom';

const WrestlerCard = (props) => {
    const { selectWrestler, wrestlerData } = props
    const { id, name, img, currentRank } = wrestlerData

    return (
        <div>
            <Link to='/wrestler'>
                <div onClick={() => selectWrestler(id)}>
                    <img src={img} alt="Sumo Wrestler" />
                    <h3>{name}</h3>
                    <h5>{currentRank}</h5>
                </div>
            </Link>
        </div>
    )
}

export default WrestlerCard;