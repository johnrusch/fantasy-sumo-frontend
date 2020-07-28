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

export const signUp = data => {
    const URL = 'http://localhost:3000/api/v1/users'
    return dispatch => {
        console.log(data)
        dispatch({ type: 'SIGNING_UP '});
        fetch(URL, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    })
        .then(resp => resp.json())
        .then(user => {
            if (!user.error) {
                dispatch({ type: 'ADD_USER', user })
                localStorage.setItem("token", user.jwt)
            }
        })
}
}

export const deleteUser = data => {
    const URL = 'http://localhost:3000/api/v1/users' + `/${data}`
    return dispatch => {
        console.log(data)
        dispatch({ type: 'DELETE_USER'});
        fetch(URL, {
        method: "DELETE"
        })
        // .then(resp => resp.json())
        // .then(user => {
            // if (!user.error) {
                localStorage.removeItem("token")
                dispatch({ type: 'DELETE_AUTH' })
            // }
        // })
}
}

export const updateUser = data => {
    const URL = 'http://localhost:3000/api/v1/users' + `/${data.id}`
    return dispatch => {
        console.log(data)
        dispatch({ type: 'UPDATE_USER'});
        fetch(URL, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(user => {
            if (!user.error) {
                dispatch({ type: 'ADD_USER', user })
                localStorage.setItem("token", user.jwt)
            }
        })
    }
}