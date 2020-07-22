import { combineReducers } from 'redux';
import wrestlersReducer from './wrestlersReducer'
import leaguesReducer from './leaguesReducer';
import teamsReducer from './teamsReducer';

const rootReducer = combineReducers({
    wrestlers: wrestlersReducer,
    leagues: leaguesReducer,
    teams: teamsReducer
})

export default rootReducer;