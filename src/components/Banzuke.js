import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store';
import BanzukeWrestlerCard from './wrestlerComponents/BanzukeWrestlerCard';

const Banzuke = observer((props) => {
    const store = useStore()
    const wrestlers = store.wrestlers

    const findWrestler = (div, rank) => {
        const wrestler = wrestlers.find( ({ division, currentRank }) => {
            return division === div && currentRank === rank
        })
        if (wrestler) {
            return <BanzukeWrestlerCard wrestlerData={wrestler} />
        } else {
            return;
        }
    }

    return (
        <div className="banzuke">
            <div className="banzukeHeader"></div>
            <div className="banzukeEast">
                {findWrestler("East", "Yokozuna")}
            </div>
            <div className="banzukeRankings"></div>
            <div className="banzukeWest"></div>
        </div>
    )
})

export default Banzuke;