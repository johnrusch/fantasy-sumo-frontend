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

export const loggingIn = data => {
    const URL = 'http://localhost:3000/api/v1/auth'
    return dispatch => {
        dispatch({ type: 'LOGGING_IN' });
        fetch(URL, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(auth => {
                console.log(auth)
                if (!auth.error) {
                    localStorage.setItem("token", auth.jwt)
                    dispatch({ type: 'ADD_AUTH', auth })
                }
            })
    }
}

export const addAuth = (auth) => {
    return { type: 'ADD_AUTH', auth }
}

export const getCurrentUser = () => {
    const URL = 'http://localhost:3000/api/v1/current_user'
    return dispatch => {
        dispatch({ type: 'LOGGING_IN' });
        fetch(URL, {
            headers: headers()
        })
            .then(resp => resp.json())
            .then(user => {
                console.log(user)
                const token = localStorage.getItem("token");
                if (token) {
                    dispatch({ type: 'ADD_USER', user })
                }
            })
    }
}

export const logOut = () => {
    localStorage.removeItem("token")
    return { type: 'DELETE_AUTH' }
}