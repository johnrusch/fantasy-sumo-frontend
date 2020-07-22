//identifies the token held in the browser
const token = () => localStorage.getItem("token");

//standardizes headers for each fetch
const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    };
};

export const fetchTeams = () => {
    const URL = 'http://localhost:3000/api/v1/teams'
    return (dispatch) => {
        dispatch({ type: 'LOADING_TEAMS'});
        fetch(URL, {
            headers: headers()
        })
            .then(resp => resp.json())
            .then(teams => dispatch({ type: 'ADD_TEAMS', teams }))
    }
}

export const selectTeam = (team) => {
    return { type: 'SELECT_TEAM', payload: team }
};