import React from "react";
import Typography from "@material-ui/core/Typography";
import TeamCard from '../teamComponents/TeamCard';

const DraftTeams = (props) => {
    const { teams } = props

  const renderTeams = () => {
    return teams.map((team) => {
      return <TeamCard teamData={team} key={team.id} />;
    });
  };

  return (
    <div className="draftTeams">
      <div className="draftTeamsHeader">
        <Typography>Teams</Typography>
      </div>
      <div className="draftTeamsList">{teams && renderTeams()}</div>
    </div>
  );
};

export default DraftTeams;
