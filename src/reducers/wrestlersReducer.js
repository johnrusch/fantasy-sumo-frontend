const wrestlersReducer = (
  state = { wrestlers: [], loading: false, selectedWrestler: "" },
  action
) => {
  switch (action.type) {
    case "LOADING_WRESTLERS":
      return {
        ...state,
        wrestlers: [...state.wrestlers],
        loading: true,
        selectedWrestler: state.selectedWrestler
      };
    case "ADD_WRESTLERS":
      return {
        ...state,
        wrestlers: action.wrestlers,
        loading: false,
        selectedWrestler: state.selectedWrestler
      };
    case "SELECT_WRESTLER":
      return {
        ...state,
        wrestlers: [...state.wrestlers],
        loading: false,
        selectedWrestler: action.payload
      };
    case "ADD_BANZUKE":
      console.log(action.payload)
      return {
        ...state,
        wrestlers: [...state.wrestlers],
        loading: false,
        selectedWrestler: state.selectedWrestler,
        banzuke: action.payload.banzuke
      };
    default:
      return state;
  }
};

export default wrestlersReducer;
