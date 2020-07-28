import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import BanzukeRow from "../banzukeComponents/BanzukeRow";
import { fetchBanzuke } from '../actions/wrestlerActions';



class Banzuke extends Component {

    

    renderRow = (ew, ww) => {
        return (
            <tr>
                <td>{ew.current_wins} - {ew.current_losses}</td>
                <td>{ew.name}</td>
                <td>{ew.current_rank}</td>
                <td>{ww.name}</td>
                <td>{ww.current_wins} - {ww.current_losses}</td>
            </tr>
        )
    }

  componentDidMount() {
      this.props.fetchBanzuke()
  }

  render() {
    // const eastYokozuna = this.props.yokozuna.find(w => w.division === "East")
    // const westYokozuna = this.props.yokozuna.find(w => w.division === "West")
    
    // const eastOzeki = this.props.ozeki.find(w => w.division === "East")
    // const westOzeki = this.props.ozeki.find(w => w.division === "West")

    // const eastSekiwake = this.props.sekiwake.find(w => w.division === "East")
    // const westSekiwake = this.props.sekiwake.find(w => w.division === "West")

    // const eastKomusubi = this.props.komusubi.find(w => w.division === "East")
    // const westKomusubi = this.props.komusubi.find(w => w.division === "West")

    // const eastMaegashira1 = this.props.maegashira1.find(w => w.division === "East")
    // const westMaegashira1 = this.props.maegashira1.find(w => w.division === "West")

    // const eastMaegashira2 = this.props.maegashira2.find(w => w.division === "East")
    // const westMaegashira2 = this.props.maegashira2.find(w => w.division === "West")

    // const eastMaegashira3 = this.props.maegashira3.find(w => w.division === "East")
    // const westMaegashira3 = this.props.maegashira3.find(w => w.division === "West")

    // const eastMaegashira4 = this.props.maegashira4.find(w => w.division === "East")
    // const westMaegashira4 = this.props.maegashira4.find(w => w.division === "West")

    // const eastMaegashira5 = this.props.maegashira5.find(w => w.division === "East")
    // const westMaegashira5 = this.props.maegashira5.find(w => w.division === "West")

    // const eastMaegashira6 = this.props.maegashira6.find(w => w.division === "East")
    // const westMaegashira6 = this.props.maegashira6.find(w => w.division === "West")

    // const eastMaegashira7 = this.props.maegashira7.find(w => w.division === "East")
    // const westMaegashira7 = this.props.maegashira7.find(w => w.division === "West")

    // const eastMaegashira8 = this.props.maegashira8.find(w => w.division === "East")
    // const westMaegashira8 = this.props.maegashira8.find(w => w.division === "West")

    // const eastMaegashira9 = this.props.maegashira9.find(w => w.division === "East")
    // const westMaegashira9 = this.props.maegashira9.find(w => w.division === "West")

    // const eastMaegashira10 = this.props.maegashira10.find(w => w.division === "East")
    // const westMaegashira10 = this.props.maegashira10.find(w => w.division === "West")

    // const eastMaegashira11 = this.props.maegashira11.find(w => w.division === "East")
    // const westMaegashira11 = this.props.maegashira11.find(w => w.division === "West")

    // const eastMaegashira12 = this.props.maegashira12.find(w => w.division === "East")
    // const westMaegashira12 = this.props.maegashira12.find(w => w.division === "West")

    // const eastMaegashira13 = this.props.maegashira13.find(w => w.division === "East")
    // const westMaegashira13 = this.props.maegashira13.find(w => w.division === "West")

    // const eastMaegashira14 = this.props.maegashira14.find(w => w.division === "East")
    // const westMaegashira14 = this.props.maegashira14.find(w => w.division === "West")

    // const eastMaegashira15 = this.props.maegashira15.find(w => w.division === "East")
    // const westMaegashira15 = this.props.maegashira15.find(w => w.division === "West")

    // const eastMaegashira16 = this.props.maegashira16.find(w => w.division === "East")
    // const westMaegashira16 = this.props.maegashira16.find(w => w.division === "West")

    // const eastMaegashira17 = this.props.maegashira17.find(w => w.division === "East")
    // const westMaegashira17 = this.props.maegashira17.find(w => w.division === "West")

  return (
    <div>

      <table>
        <tbody>
            {/* {this.renderRow(eastYokozuna, westYokozuna)} */}
        </tbody>
      </table>
    </div>
  );
};
}

// const mapStateToProps = (state) => {
//   return {
//     yokozuna: state.wrestlers.banzuke.yokozuna,
//     ozeki: state.wrestlers.banzuke.ozeki,
//     sekiwake: state.wrestlers.banzuke.sekiwake,
//     komusubi: state.wrestlers.banzuke.komusubi,
//     maegashira1: state.wrestlers.banzuke.maegashira1,
//     maegashira2: state.wrestlers.banzuke.maegashira2,
//     maegashira3: state.wrestlers.banzuke.maegashira3,
//     maegashira4: state.wrestlers.banzuke.maegashira4,
//     maegashira5: state.wrestlers.banzuke.maegashira5,
//     maegashira6: state.wrestlers.banzuke.maegashira6,
//     maegashira7: state.wrestlers.banzuke.maegashira7,
//     maegashira8: state.wrestlers.banzuke.maegashira8,
//     maegashira9: state.wrestlers.banzuke.maegashira9,
//     maegashira10: state.wrestlers.banzuke.maegashira10,
//     maegashira11: state.wrestlers.banzuke.maegashira11,
//     maegashira12: state.wrestlers.banzuke.maegashira12,
//     maegashira13: state.wrestlers.banzuke.maegashira13,
//     maegashira14: state.wrestlers.banzuke.maegashira14,
//     maegashira15: state.wrestlers.banzuke.maegashira15,
//     maegashira16: state.wrestlers.banzuke.maegashira16,
//     maegashira16: state.wrestlers.banzuke.maegashira16,
//   };
// };

export default connect(null, { fetchBanzuke })(Banzuke);
