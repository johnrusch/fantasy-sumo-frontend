import React from "react";
import WrestlerCard from "../wrestlerComponents/WrestlerCard";

import List from '@material-ui/core/List';


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
      {/* <List> */}
   {teamData.name ? (
      <h4 className="center">{`${teamData.name} - ${teamData.user.name}`}</h4>
   ) : (
     props.history.push("/league/standings")
   )}
      {renderWrestlers()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamData: state.teams.selectedTeam,
  };
};

export default connect(mapStateToProps)(TeamWrestlers);
