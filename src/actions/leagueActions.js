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

export const getUserLeagues = async () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/user_leagues'
    let response = await fetch(URL, { headers: headers() });
    let userLeagues = await response.json();
    if (!userLeagues.error) {
        return userLeagues;
    }
}

export const getOpenLeagues = async () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/open_leagues'
    let response = await fetch(URL, { headers: headers() });
    let openLeagues = await response.json();
    if (!openLeagues.error) {
        return openLeagues;
    }
}

export const createLeague = async data => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/leagues'
    let response = await fetch(URL, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    });
    if (response.ok) {
        let league = await response.json();
        return league;
    }
}

export const addUserToLeague = async data => {
    const URL = `https://fantasy-sumo-backend.herokuapp.com/api/v1/leagues/${data.leagueID}`;
    let response = await fetch(URL, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify(data)
    });
    if (response.ok) {
        let league = await response.json();
        return league;
    }
}