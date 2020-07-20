import React, { Component } from "react";

const TeamCard = (props) => {
    const { name, user, points } = props

    return (
        <div>
            {console.log("hey")}
            <li>
                <h3>{name}</h3>
                <h3>{points}</h3>
            </li>
        </div>
    )

}

export default TeamCard;