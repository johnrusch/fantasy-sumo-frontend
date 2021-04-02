import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";
// import BanzukeWrestlerCard from "./wrestlerComponents/BanzukeWrestlerCard";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import WrestlerCard from './wrestlerComponents/WrestlerCard'

const Banzuke = observer((props) => {
  const store = useStore();
  const wrestlers = store.wrestlers;

  const findWrestler = (div, rank) => {
    const wrestler = wrestlers.find(({ division, currentRank }) => {
      return division === div && currentRank === rank;
    });
    if (wrestler) {
      return <WrestlerCard wrestlerData={wrestler} />;
    } else {
      console.log("hey")
      return <Paper />;
    }
  };

  return (
    <div className="banzuke">
      <div className="banzukeHeader">
        <Typography>Sumo Wrestlers</Typography>
      </div>
      <div className="banzukeEast">
        {findWrestler("East", "Yokozuna")}
        {findWrestler("East", "Ozeki")}
        {findWrestler("East", "Sekiwake")}
        {findWrestler("East", "Komusubi")}
        {findWrestler("East", "Maegashira 1")}
        {findWrestler("East", "Maegashira 2")}
        {findWrestler("East", "Maegashira 3")}
        {findWrestler("East", "Maegashira 4")}
        {findWrestler("East", "Maegashira 5")}
        {findWrestler("East", "Maegashira 6")}
        {findWrestler("East", "Maegashira 7")}
        {findWrestler("East", "Maegashira 8")}
        {findWrestler("East", "Maegashira 9")}
        {findWrestler("East", "Maegashira 10")}
        {findWrestler("East", "Maegashira 11")}
        {findWrestler("East", "Maegashira 12")}
        {findWrestler("East", "Maegashira 13")}
        {findWrestler("East", "Maegashira 14")}
        {findWrestler("East", "Maegashira 15")}
        {findWrestler("East", "Maegashira 16")}
        {findWrestler("East", "Maegashira 17")}
      </div>
      <div className="banzukeRankings">
        
      </div>
      <div className="banzukeWest">
        {findWrestler("West", "Yokozuna")}
        {findWrestler("West", "Ozeki")}
        {findWrestler("West", "Sekiwake")}
        {findWrestler("West", "Komusubi")}
        {findWrestler("West", "Maegashira 1")}
        {findWrestler("West", "Maegashira 2")}
        {findWrestler("West", "Maegashira 3")}
        {findWrestler("West", "Maegashira 4")}
        {findWrestler("West", "Maegashira 5")}
        {findWrestler("West", "Maegashira 6")}
        {findWrestler("West", "Maegashira 7")}
        {findWrestler("West", "Maegashira 8")}
        {findWrestler("West", "Maegashira 9")}
        {findWrestler("West", "Maegashira 10")}
        {findWrestler("West", "Maegashira 11")}
        {findWrestler("West", "Maegashira 12")}
        {findWrestler("West", "Maegashira 13")}
        {findWrestler("West", "Maegashira 14")}
        {findWrestler("West", "Maegashira 15")}
        {findWrestler("West", "Maegashira 16")}
        {findWrestler("West", "Maegashira 17")}
      </div>
    </div>
  );
});

// export default Banzuke;

export const MemoizedBanzuke = React.memo(Banzuke);
