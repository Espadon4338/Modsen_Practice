async function fetchUserData(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await res.json()
        return user;
    } catch (error) {
        console.log(error.message)
    }
}

fetchUserData(1).then(user => {
    console.log(user)
})