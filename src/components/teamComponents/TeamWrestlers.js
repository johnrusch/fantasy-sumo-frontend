import React from "react";
import WrestlerCard from "../wrestlerComponents/WrestlerCard";
import { observer } from 'mobx-react';
import { useStore } from '../../store';
import List from '@material-ui/core/List';


const TeamWrestlers = observer((props) => {
  const store = useStore();
  const { selectWrestler } = props;
  const { name, wrestlers } = store.selectedTeam;

  const renderWrestlers = () => {
    if (wrestlers) {
      return wrestlers.map((wrestler) => {
        return (
          <WrestlerCard
            wrestlerData={wrestler}
            selectWrestler={store.selectWrestler}
            key={wrestler.id}
          />
        );
      });
    }
  };
  return (
    <div>
      {/* <List> */}
   {name ? (
      <h4 className="center">{`${name} - ${store.selectedTeam.user.name}`}</h4>
   ) : (
     props.history.push("/league/standings")
   )}
      {renderWrestlers()}
    </div>
  );
});


export default TeamWrestlers;
