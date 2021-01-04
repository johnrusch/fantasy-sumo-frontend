import React from "react";
import TeamCard from "./TeamCard";
import { observer } from "mobx-react";
import { useStore } from "../../store";

const Teams = observer(() => {
  const store = useStore();
  const currentUserID = store.currentUserID;

  const userTeams = () => {
    return store.teams.filter((team) => {
      return team.user.id === currentUserID;
    });
  };

  const renderTeams = () => {
    return userTeams().map((team) => {
      return <TeamCard teamData={team} key={team.id} />;
    });
  };

  return (
    <div className="container">
      <h4 style={{textAlign: "center"}}>My Teams</h4>
      {renderTeams()}
    </div>
  );
});

export default Teams;
