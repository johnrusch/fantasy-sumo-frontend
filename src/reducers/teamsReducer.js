const teamsReducer = (
  state = { teams: [], loading: false, selectedTeam: "" },
  action
) => {
  switch (action.type) {
    case "LOADING_TEAMS":
      return {
        ...state,
        teams: [...state.teams],
        loading: true,
        selectedTeam: state.selectedTeam,
      };
    case "ADD_TEAMS":
      return {
        ...state,
        teams: action.teams,
        loading: false,
        selectedTeam: state.selectedTeam,
      };
    case "SELECT_TEAM":
      return {
        ...state,
        teams: [...state.teams],
        loading: false,
        selectedTeam: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
