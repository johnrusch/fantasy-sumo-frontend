import { combineReducers } from "redux";
import wrestlersReducer from "./wrestlersReducer";
import leaguesReducer from "./leaguesReducer";
import teamsReducer from "./teamsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  wrestlers: wrestlersReducer,
  leagues: leaguesReducer,
  teams: teamsReducer,
  auth: authReducer,
});

export default rootReducer;
