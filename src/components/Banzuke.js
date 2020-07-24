import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import YokozunaRow from "../banzukeComponents/YokozunaRow"
import OzekiRow from '../banzukeComponents/OzekiRow'

const Banzuke = (props) => {

    const eastYokozuna = props.yokozuna.filter(yokozuna => {
        return yokozuna.division === "East"
    })

    const westYokozuna = props.yokozuna.filter(yokozuna => {
        return yokozuna.division === "West"
    })

    const eastOzeki = props.ozeki.filter(ozeki => {
        return ozeki.division === "East"
    })

    const westOzeki = props.ozeki.filter(ozeki => {
        return ozeki.division === "West"
    })

    const eastSekiwake = props.sekiwake.filter(sekiwake => {
        return sekiwake.division === "East"
    })

    const westSekiwake = props.sekiwake.filter(sekiwake => {
        return sekiwake.division === "West"
    })

    const eastKomusubi = props.komusubi.filter(komusubi => {
        return komusubi.division === "East"
    })

    const westKomusubi = props.komusubi.filter(komusubi => {
        return komusubi.division === "West"
    })

    const eastMaegashira = props.maegashira.filter(wrestler => {
        return wrestler.division === "East"
    })

    const westMaegashira = props.maegashira.filter(wrestler => {
        return wrestler.division === "West"
    })

    const renderEastWrestlers = (wrestlers) => {
        wrestlers.map(wrestler => {
            return <Fragment >
            <td>{wrestler.current_wins} - {wrestler.current_losses}</td>
            <td><Link>{wrestler.name}</Link></td>
            </Fragment>
          })
    }

    const renderWestWrestlers = (wrestlers) => {
        wrestlers.map(wrestler => {
            return <Fragment >
            <td>{wrestler.name}</td>
            <td>{wrestler.current_wins} - {wrestler.current_losses}</td>
            </Fragment>
          })
    }

    // const renderMaegashira = (east, west) => {
    //     wrestlers.map(wrestler => {
    //         return <Fragment >
    //         <td>{wrestler.name}</td>
    //         <td>{wrestler.current_wins} - {wrestler.current_losses}</td>
    //         </Fragment>
    //       })
    // }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {renderEastWrestlers(eastYokozuna)}
                        <td>Yokozuna</td>
                        {renderWestWrestlers(westYokozuna)}
                    </tr>
                    <tr>
                        {renderEastWrestlers(eastOzeki)}
                        <td>Ozeki</td>
                        {renderWestWrestlers(westOzeki)}
                    </tr>
                    <tr>
                        {renderEastWrestlers(eastSekiwake)}
                        <td>Ozeki</td>
                        {renderWestWrestlers(westSekiwake)}
                    </tr>
                    <tr>
                        {renderEastWrestlers(eastKomusubi)}
                        <td>Ozeki</td>
                        {renderWestWrestlers(westKomusubi)}
                    </tr>
                    <tr>
                        {renderEastWrestlers(eastMaegashira)}
                        <td>Mae</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        yokozuna: state.wrestlers.wrestlers.yokozuna,
        ozeki: state.wrestlers.wrestlers.ozeki,
        sekiwake: state.wrestlers.wrestlers.sekiwake,
        komusubi: state.wrestlers.wrestlers.komusubi,
        maegashira: state.wrestlers.wrestlers.maegashira
    }
}

export default connect(mapStateToProps)(Banzuke);