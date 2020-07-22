import React from "react";
import WrestlerCard from "./WrestlerCard";

import { connect } from "react-redux";

const TeamWrestlers = (props) => {
  const { teamData, selectWrestler } = props;
  const { name, wrestlers } = teamData;

  const renderWrestlers = () => {
    if (wrestlers) {
      return wrestlers.map((wrestler) => {
        return (
          <WrestlerCard
            wrestlerData={wrestler}
            selectWrestler={selectWrestler}
          />
        );
      });
    }
  };
  return (
    <div>
      {console.log(props.teamData)}
      <h3>{name}</h3>
      <ul>{renderWrestlers()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamData: state.teams.selectedTeam,
  };
};

export default connect(mapStateToProps)(TeamWrestlers);
