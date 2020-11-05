import React from "react";
import TeamCard from "../teamComponents/TeamCard";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const LeagueStandings = observer((props) => {
  const store = useStore();
  const { name, teams, id, closed } = store.selectedLeague;

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
      const sortedTeams = teams.slice().sort(comparePoints);
      return sortedTeams.map((team) => {
        return <TeamCard teamData={team} key={team.id} />;
      });
    } else {
      props.history.push("/leagues");
    }
  };

  return (
    <div>
      <h4 className="center">{name}</h4>
        {renderTeams()}
    </div>
  );
});

export default LeagueStandings;
