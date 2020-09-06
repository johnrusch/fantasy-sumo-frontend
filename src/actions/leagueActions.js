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

export const fetchLeagues = () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/leagues'
    return (dispatch) => {
        dispatch({ type: 'LOADING_LEAGUES'});
        fetch(URL, {
            headers: headers()
        })
            .then(resp => resp.json())
            .then(leagues => dispatch({ type: 'ADD_LEAGUES', leagues }))
    }
}

export const selectLeague = (league) => {
    return { type: 'SELECT_LEAGUE', payload: league}
  };
