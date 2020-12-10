export const simpleFetch = url => {
    return new Promise((resolve, reject) => {
        window.fetch(url)
            .then(res => {
                if (res.ok) {
                    res.json().then(resolve).catch(reject)
                } else {
                    reject(res)
                }
            })
            .catch(reject)
    })
}