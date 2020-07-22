import React from "react";

import { connect } from 'react-redux';

const WrestlerSpecs = (props) => {
    const { id, name, age, img, currentRank } = props.wrestlerData


    return (
        <div>
        {console.log(props)}
            <h3>{name} - {currentRank}</h3>
            <img src={img} alt="Sumo Wrestler" />

        </div>
    )

}

const mapStateToProps = state => {
    return {
        wrestlerData: state.wrestlers.selectedWrestler
    }
}

export default connect(mapStateToProps)(WrestlerSpecs);