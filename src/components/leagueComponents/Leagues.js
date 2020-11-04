import React, { Component } from "react";
import { Link } from "react-router-dom";
import LeagueCard from "./LeagueCard";
import CreateLeague from "./CreateLeague";
import Paper from "@material-ui/core/Paper";
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const Leagues = observer(() => {
  const store = useStore();

  const renderUserLeagues = () => {
    const leagues = store.userLeagues;
    return leagues.map((league) => {
      return (
        <LeagueCard selectLeague={this.selectLeague} leagueData={league} />
      );
    });
  };

  // renderOpenLeagues = () => {
  //   const leagues = this.props.openLeagues;
  //   return leagues.map((league) => {
  //     if (!league.closed) {
  //       return (
  //         <LeagueCard selectLeague={this.selectLeague} leagueData={league} />
  //       );
  //     }
  //   });
  // };


    return (
      <div>
        <h4 className="center">My Leagues</h4>
        {this.props.userLeagues && renderUserLeagues()}
        {/* <h4 className="center">Open Leagues</h4>
        {this.props.openLeagues && this.renderOpenLeagues()} */}
        <Paper elevation={3}>
          <Link to="/league/new">Create New League</Link>
        </Paper>
      </div>
    );
})

// const mapStateToProps = (state) => {
//   return {
//     userLeagues: state.leagues.userLeagues,
//     openLeagues: state.leagues.openLeagues,
//     loading: state.loading,
//   };
// };

export default Leagues;
