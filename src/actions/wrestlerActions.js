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

const WRESTLERS_URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/wrestlers';
// export const fetchWrestlers = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_WRESTLERS'});
//         fetch('https://fantasy-sumo-backend.herokuapp.com/api/v1/wrestlers', {
//             headers: headers()
//         })
//             .then(resp => resp.json())
//             .then(wrestlers => dispatch({ type: 'ADD_WRESTLERS', wrestlers }))
//     }
// }

export const getWrestlers = async () => {
    let response = await fetch(WRESTLERS_URL, { headers: headers() });
    let wrestlers = await response.json();
    return wrestlers;
}

export const selectWrestler = (wrestler) => {
    return { type: 'SELECT_WRESTLER', payload: wrestler }
};

export const fetchBanzuke = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_WRESTLERS'});
        fetch('https://fantasy-sumo-backend.herokuapp.com/api/v1/banzuke', {
            headers: headers()
        })
            .then(resp => resp.json())
            .then(banzuke => dispatch({ type: 'ADD_BANZUKE', banzuke }))
    }
}

// export const wrestlerAPI = {
//     getWrestlers: getWrestlers
// }