const leaguesReducer = (
  state = { userLeagues: [], openLeagues: [], loading: false, selectedLeague: "" },
  action
) => {
  switch (action.type) {
    case "LOADING_LEAGUES":
      return {
        ...state,
        userLeagues: [...state.userLeagues],
        openLeagues: [...state.openLeagues],
        loading: true,
        selectedLeague: state.selectedLeague,
      };
    case "ADD_USER_LEAGUES":
      return {
        ...state,
        userLeagues: action.userLeagues,
        openLeagues: [...state.openLeagues],
        loading: false,
        selectedLeague: state.selectedLeague,
      };
    case "ADD_OPEN_LEAGUES":
      return {
        ...state,
        userLeagues: state.userLeagues,
        openLeagues: action.openLeagues,
        loading: false,
        selectedLeague: state.selectedLeague,
      };
    case "SELECT_LEAGUE":
      return {
        ...state,
        userLeagues: [...state.userLeagues],
        openLeagues: [...state.openLeagues],
        loading: false,
        selectedLeague: action.payload,
      };
    case "CREATE_LEAGUE":
      return {
        ...state,
        userLeagues: [...state.userLeagues],
        openLeagues: [...state.openLeagues, action.league],
        loading: false,
        selectedLeague: state.selectedLeague,
      };
    default:
      return state;
  }
};

export default leaguesReducer;
