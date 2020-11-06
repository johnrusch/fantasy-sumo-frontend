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

// export const fetchTeams = () => {
//     const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/teams'
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_TEAMS'});
//         fetch(URL, {
//             headers: headers()
//         })
//             .then(resp => resp.json())
//             .then(teams => dispatch({ type: 'ADD_TEAMS', teams }))
//     }
// }

export const getTeams = async () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/teams'
    let response = await fetch(URL, { headers: headers() });
    let teams = await response.json();
    return teams;
}

export const selectTeam = (team) => {
    return { type: 'SELECT_TEAM', payload: team }
};