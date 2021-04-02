import React from "react";
import Typography from "@material-ui/core/Typography";
import TeamCard from '../teamComponents/TeamCard';
import { observer } from "mobx-react";

const DraftTeams = observer((props) => {
  const { teams } = props

  const shuffleTeams = (teams) => {
    let unshuffledLength = teams.length, t, i;
    
    while (unshuffledLength) {

      i = Math.floor(Math.random() * unshuffledLength--);

      //t is last element
      t = teams[unshuffledLength]
      teams[unshuffledLength] = teams[i]
      teams[i] = t;
    }

    return teams
  }

  const renderTeams = () => {
    return shuffleTeams(teams).map((team) => {
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
