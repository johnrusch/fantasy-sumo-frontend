const errorReducer = (state = null, action) => {
    if (action.type === 'THROW_ERROR') {
        return action.error;
    }
    return state;
}

export default errorReducer;