import { combineReducers } from "redux";
import wrestlersReducer from "./wrestlersReducer";
import leaguesReducer from "./leaguesReducer";
import teamsReducer from "./teamsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  wrestlers: wrestlersReducer,
  leagues: leaguesReducer,
  errors: errorReducer,
  teams: teamsReducer,
  auth: authReducer,
});

export default rootReducer;
