const authReducer = (
  state = { id: 0, name: "", password: "", loading: false },
  action
) => {
  switch (action.type) {
    case "LOGGING_IN":
      return {
        ...state,
        id: state.id,
        name: state.name,
        password: state.password,
        loading: true,
      };
    case "ADD_AUTH":
      return {
        ...state,
        id: action.id,
        name: action.name,
        password: action.password,
        loading: false,
      };
    case "ADD_USER":
      console.log(action);
      return {
        ...state,
        id: action.user.id,
        name: action.user.name,
        password: state.password,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
