import React from 'react';
import { observer } from 'mobx-react';
import Paper from "@material-ui/core/Paper";
import { useStore } from '../store';

const Banzuke = observer((props) => {
    const store = useStore()
    const wrestlers = store.wrestlers

    const findWrestler = (division, rank) => {
        
    }

    return (
        <div>

        </div>
    )
})

export default Banzuke;