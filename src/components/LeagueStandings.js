import React from "react";
import TeamCard from "./TeamCard";

const LeagueStandings = (props) => {
  const { leagueData, selectTeam } = props;
  const { name, teams, id } = leagueData;

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
    console.log(props)
    if (teams) {
      const sortedTeams = teams.sort(comparePoints);
      return sortedTeams.map(team => {
        console.log(team.id)
        return <TeamCard teamData={team} selectTeam={selectTeam}/>;
      });
    } else {
      props.history.push("/leagues")
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <ul>{renderTeams()}</ul>
    </div>
  );
};

export default LeagueStandings;
