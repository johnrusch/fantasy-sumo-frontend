import React from 'react';

import { connect } from 'react-redux';

const YokozunaRow = (props) => {

    const east_yokozuna = props.yokozuna.find(yokozuna => {
        return yokozuna.division === "East"
    })

    const west_yokozuna = props.yokozuna.find(yokozuna => {
        return yokozuna.division === "West"
    })

    return (
        <div>
            <tr>
                <td>{east_yokozuna.current_wins} - {east_yokozuna.current_losses}</td>
                <td>{east_yokozuna.name}</td>
                <td>Yokozuna</td>
                <td>{west_yokozuna.name}</td>
                <td>{west_yokozuna.current_wins} - {east_yokozuna.current_losses}</td>
            </tr>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        yokozuna: state.wrestlers.wrestlers.yokozuna
    }
}

export default connect(mapStateToProps)(YokozunaRow);