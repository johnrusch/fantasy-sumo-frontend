import React from 'react';

import { connect } from 'react-redux';

const OzekiRow = (props) => {

    const east_ozeki = props.ozeki.find(ozeki => {
        return ozeki.division === "East"
    })

    const west_ozeki = props.ozeki.find(ozeki => {
        return ozeki.division === "West"
    })

    return (
        <div>
            <tr>
                <td>{east_ozeki.current_wins} - {east_ozeki.current_losses}</td>
                <td>{east_ozeki.name}</td>
                <td>Ozeki</td>
                <td>{west_ozeki.name}</td>
                <td>{west_ozeki.current_wins} - {east_ozeki.current_losses}</td>
            </tr>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ozeki: state.wrestlers.wrestlers.ozeki
    }
}

export default connect(mapStateToProps)(OzekiRow);