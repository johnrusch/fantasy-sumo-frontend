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

// export const fetchUserLeagues = () => {
//     const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/user_leagues'
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_LEAGUES'});
//         fetch(URL, {
//             headers: headers()
//         })
//         .then(resp => resp.json())
//         .then(userLeagues => {
//                 console.log(userLeagues)
//                 if (!userLeagues.error) {
//                     dispatch({ type: 'ADD_USER_LEAGUES', userLeagues })
//                 }
//             })
//     }
// }

export const getUserLeagues = async () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/user_leagues'
    let response = await fetch(URL, { headers: headers() });
    let userLeagues = await response.json();
    if (!userLeagues.error) {
        return userLeagues;
    }
}

// export const fetchOpenLeagues = () => {
//     const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/open_leagues'
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_LEAGUES'});
//         fetch(URL, {
//             headers: headers()
//         })
//             .then(resp => resp.json())
//             .then(openLeagues => dispatch({ type: 'ADD_OPEN_LEAGUES', openLeagues }))
//     }
// }

export const getOpenLeagues = async () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/open_leagues'
    let response = await fetch(URL, { headers: headers() });
    let openLeagues = await response.json();
    if (!openLeagues.error) {
        return openLeagues;
    }
}

export const createLeague = data => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/leagues'
    return dispatch => {
        console.log(data)
        dispatch({ type: 'LOADING_LEAGUES'});
        fetch(URL, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
        .then(resp => resp.json())
        .then(league => {
            if (!league.error) {
                dispatch({ type: 'CREATE_LEAGUE', league })
                // localStorage.setItem("token", user.jwt)
            } else {
                dispatch({ type: 'THROW_ERROR', league })
            }
        })
}
}

export const selectLeague = (league) => {
    return { type: 'SELECT_LEAGUE', payload: league}
  };
