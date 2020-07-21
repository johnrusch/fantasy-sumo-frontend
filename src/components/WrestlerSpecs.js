import React from "react";

const WrestlerSpecs = (props) => {
    const { id, name, age, img, currentRank } = props.wrestlerData


    return (
        <div>
            <h3>{name} - {currentRank}</h3>
            <img src={img} alt="Sumo Wrestler" />

        </div>
    )

}

export default WrestlerSpecs;