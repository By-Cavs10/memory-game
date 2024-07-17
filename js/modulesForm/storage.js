


function saveUser(user) {
    // Get old users
    const users = getUsers()
    // add new One
    users.push({ mail: user.mail, password: user.password, username: user.username })
    // Save in LS
    localStorage.setItem('users', JSON.stringify(users))
    console.log('Save');
    console.log(user);
    console.log(users );
}

function getUsers() {
    // Get users or array if empty
    const datasFromLocalstorage = localStorage.getItem('users');
    const convertUsers = JSON.parse(datasFromLocalstorage) || [];

    return convertUsers


    // return JSON.parse(localStorage.getItem(KEY_USER)) || []
}

function getUserById(id) {
  const users = getUsers();
  return users.find(user => user.id === id);
}

export { saveUser, getUsers, getUserById }