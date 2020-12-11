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

export const logIn = async data => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/auth';
    let response = await fetch(URL, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    });
    let auth = await response.json();
    if (!auth.error){
        localStorage.setItem("token", auth.jwt)
    } 
    return auth;
}

export const addAuth = (auth) => {
    return { type: 'ADD_AUTH', auth }
}

export const getCurrentUser = async () => {
    const URL = 'https://fantasy-sumo-backend.herokuapp.com/api/v1/current_user';
    let response = await fetch(URL, {
        headers: headers()
    });
    let currentUser = await response.json();
    if (!currentUser.error) {
        return currentUser;
    }
}
