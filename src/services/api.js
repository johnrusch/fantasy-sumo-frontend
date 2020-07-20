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

const login = data => {
    const URL = 'http://localhost:3000/api/v1/auth'
    return fetch(URL, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => {
        return resp.json();
    })
}

const getCurrentUser = () => {
    const URL = 'http://localhost:3000/api/v1/current_user'
    return fetch(URL, {
        headers: headers()
    }).then(resp => resp.json())
}

const fetchUserLeagues = () => {
    const URL = 'http://localhost:3000/api/v1/leagues'
    return fetch(URL, {
        headers: headers()
    }).then(resp => resp.json())
}

const fetchUserTeams = () => {
    const URL = 'http://localhost:3000/api/v1/teams'
    return fetch(URL, {
        headers: headers()
    }).then(resp => resp.json())
}

export const api = {
    auth: {
        login,
        getCurrentUser
    },
    leagues: {
        fetchUserLeagues
    },
    teams: {
        fetchUserTeams
    }
}