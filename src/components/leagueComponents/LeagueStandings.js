import React from "react";
import TeamCard from "../teamComponents/TeamCard";

import List from '@material-ui/core/List';
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";

const LeagueStandings = (props) => {
  const { leagueData, selectTeam } = props;
  const { name, teams, id, closed } = leagueData;

  const comparePoints = (a, b) => {
    const pointsA = parseInt(a.points);
    const pointsB = parseInt(b.points);

    let comparison = 0;
    if (pointsA < pointsB) {
      comparison = 1;
    } else if (pointsA > pointsB) {
      comparison = -1;
    }
    return comparison;
  };

  const renderTeams = () => {
    if (teams && closed === true) {
      const sortedTeams = teams.sort(comparePoints);
      return sortedTeams.map((team) => {
        return <TeamCard teamData={team} selectTeam={selectTeam} />;
      });
    } else {
      props.history.push("/leagues");
    }
  };

  return (
    <div>
      <h4 className="center">{name}</h4>
        {console.log(props.leagueData)}
        {renderTeams()}


    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    leagueData: state.leagues.selectedLeague,
  };
};

export default connect(mapStateToProps)(LeagueStandings);
