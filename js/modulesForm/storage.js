
const KEY_USER = 'mail'

function saveUser(mail, password) {
    // Get old users
    const users = getUsers()
    // add new One
    users.push(mail)
    // Save in LS
    localStorage.setItem(KEY_USER, JSON.stringify(mail))
}

function getUsers() {
    // Get users or array if empty
    const datasFromLocalstorage = localStorage.getItem(KEY_USER)
    const convertUsers = JSON.parse(datasFromLocalstorage) || []

    return convertUsers

    // return JSON.parse(localStorage.getItem(KEY_USER)) || []
}

export { saveUser }