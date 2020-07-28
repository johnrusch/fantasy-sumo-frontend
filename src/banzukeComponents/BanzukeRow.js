import React from "react";

import { connect } from 'react-redux';

const BanzukeRow = props => {
    const { i } = props
  const ranks = ["Yokozuna", "Ozeki", "Sekiwake", "Komusubi"];

  const length = props.wrestlers.filter((wrestler) => {
    return wrestler.division === "East";
  }).length;

  const rankToSearch = ranks[i] || `Maegashira ${i - 3}`;
  const eastWrestler = props.wrestlers.find(
    (w) => w.currentRank === rankToSearch && w.division === "East"
  );
  const westWrestler = props.wrestlers.find(
    (w) => w.currentRank === rankToSearch && w.division === "West"
  );

  return (
    <tr>
        {console.log(eastWrestler)}
      <td>
        {eastWrestler.currentWins} - {eastWrestler.currentLosses}
      </td>
      <td>{eastWrestler.name}</td>
      <td>{rankToSearch}</td>
      <td>{westWrestler.name}</td>
      <td>
        {westWrestler.currentWins} - {westWrestler.currentLosses}
      </td>
    </tr>
  );
};

const mapStateToProps = state => {
    return {
        wrestlers: state.wrestlers.wrestlers
    }
}

export default connect(mapStateToProps)(BanzukeRow);
