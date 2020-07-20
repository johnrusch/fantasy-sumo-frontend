import React from "react";
import TeamCard from "./TeamCard";

const LeagueStandings = (props) => {
  const { name, teams, id } = props.leagueData;

  const comparePoints = (a, b) => {
    // Use toUpperCase() to ignore character casing
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

  const sortedTeams = teams.sort(comparePoints);

  const renderTeams = () => {
    console.log(sortedTeams)
    return sortedTeams.map(team => {
      return <TeamCard name={team.name} user={team.user} points={team.points} />;
    });
  };

  return (
    <div>
      <h3>{name}</h3>
      <ul>{renderTeams()}</ul>
    </div>
  );
};

export default LeagueStandings;
