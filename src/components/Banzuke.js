import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { fetchBanzuke } from '../actions/wrestlerActions';



class Banzuke extends Component {

    

    renderRow = (ew, ww) => {
        return (
            // <tr>
            <div>
                <td>{ew.currentWins} - {ew.currentLosses}</td>
                <td>{ew.name}</td>
                <td>{ew.currentRank}</td>
                <td>{ww.name}</td>
                <td>{ww.currentWins} - {ww.currentLosses}</td>
            </div>
        )
    }

  render() {
    const eastYokozuna = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Yokozuna")
    const westYokozuna = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Yokozuna")
    
    const eastOzeki = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Ozeki")
    const westOzeki = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Ozeki")

    const eastSekiwake = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Sekiwake")
    const westSekiwake = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Sekiwake")

    const eastKomusubi = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Komusubi")
    const westKomusubi = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Komusubi")

    const eastMaegashira1 = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Maegashira 1")
    const westMaegashira1 = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Maegashira 1")

    const eastMaegashira2 = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Maegashira 2")
    const westMaegashira2 = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Maegashira 2")

    const eastMaegashira3 = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Maegashira 3")
    const westMaegashira3 = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Maegashira 3")

    const eastMaegashira4 = this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Maegashira 4")
    const westMaegashira4 = this.props.wrestlers.find(w => w.division === "West" && w.currentRank === "Maegashira 4")

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
            {this.props.wrestlers[0] ? 
          <tbody>
            <tr>{this.renderRow(eastYokozuna, westYokozuna)}</tr>
            <tr>{this.renderRow(eastOzeki, westOzeki)}</tr>
            <tr>{this.renderRow(eastSekiwake, westSekiwake)}</tr>
            <tr>{this.renderRow(eastKomusubi, westKomusubi)}</tr>
            <tr>{this.renderRow(eastMaegashira1, westMaegashira1)}</tr>
            <tr>{this.renderRow(eastMaegashira2, westMaegashira2)}</tr>
            <tr>{this.renderRow(eastMaegashira3, westMaegashira3)}</tr>
            {/* <tr>{this.renderRow(eastMaegashira4, westMaegashira4)}</tr> */}
        </tbody>
          :
          null}
            {/* {console.log(this.props.wrestlers.find(w => w.division === "East" && w.currentRank === "Yokozuna"))} */}
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

const mapStateToProps = state => {
  return {
    wrestlers: state.wrestlers.wrestlers
  }
}

export default connect(mapStateToProps, { fetchBanzuke })(Banzuke);
