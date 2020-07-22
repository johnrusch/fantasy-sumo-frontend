const leaguesReducer = (
  state = { leagues: [], loading: false, selectedLeague: "" },
  action
) => {
  switch (action.type) {
    case "LOADING_LEAGUES":
      return {
        ...state,
        leagues: [...state.leagues],
        loading: true,
        selectedLeague: state.selectedLeague,
      };
    case "ADD_LEAGUES":
      return {
        ...state,
        leagues: action.leagues,
        loading: false,
        selectedLeague: state.selectedLeague,
      };
    case "SELECT_LEAGUE":
      return {
        ...state,
        leagues: [...state.leagues],
        loading: state.loading,
        selectedLeague: action.payload,
      };
    default:
      return state;
  }
};

export default leaguesReducer;
