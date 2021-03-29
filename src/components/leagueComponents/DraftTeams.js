import React from "react";
import Typography from "@material-ui/core/Typography";
import TeamCard from '../teamComponents/TeamCard';
import { observer } from "mobx-react";

const DraftTeams = observer((props) => {
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
});

export default DraftTeams;
