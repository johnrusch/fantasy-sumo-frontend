import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store";
import Button from "@material-ui/core/Button";

const LeagueInvitation = observer(() => {
  const store = useStore();
  const url = window.location.href.split("=");
  const leagueID = parseInt(url[1])

  const joinLeague = id => {

  }

  return (
    <div>
      <h2>You've been invited to a league!</h2>
      <Button color="primary" type="submit" onClick={joinLeague(leagueID)}>
        Join League
      </Button>
    </div>
  );
});

export default LeagueInvitation;
