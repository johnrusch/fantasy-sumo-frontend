import React, { Component } from "react";
import WrestlerCard from "./WrestlerCard";

const TeamWrestlers = (props) => {
    const { teamData, selectWrestler } = props
    const { name, wrestlers } = teamData

    const renderWrestlers = () => {
        if (wrestlers) {
            return wrestlers.map(wrestler => {
                return <WrestlerCard wrestlerData={wrestler} selectWrestler={selectWrestler}/>
            })
        } 
    }
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {renderWrestlers()}
            </ul>
        </div>
    )
    
}

export default TeamWrestlers;