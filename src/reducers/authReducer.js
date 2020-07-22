const authReducer = (
  state = {},
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
        console.log(action)
      return {
        ...state,
        id: action.auth.id,
        name: action.auth.name,
        password: action.auth.password,
        loading: false,
      };
    case "ADD_USER":
      return {
        ...state,
        id: action.user.id,
        name: action.user.name,
        password: state.password,
        loading: false,
      };
    case "DELETE_USER":
      return {
        ...state,
        id: state.id,
        name: state.name,
        password: state.password,
        loading: true,
      };
    case "DELETE_AUTH":
      return {
        ...state,
        id: 0,
        name: '',
        password: state.password,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
