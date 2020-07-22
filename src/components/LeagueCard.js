import React from "react";
import { Link, Route } from "react-router-dom";

import { connect } from "react-redux";
import { selectLeague } from "../actions/leagueActions";

const LeagueCard = (props) => {
  const { leagueData } = props;
  const { name, id, teams } = leagueData;

  return (
    <div className="card" onClick={() => props.selectLeague(leagueData)}>
      <Link to="/league/standings">
        <div className="card-header">{name}</div>
        <div className="card-body">
          Number of teams: {teams.length}
        </div>
      </Link>
    </div>
  );
};

export default connect(null, { selectLeague })(LeagueCard);
