
function isValidUsername(username) {
    if (typeof username !== 'string') {
        throw new TypeError(`Invalid Username: '${username}'`);
    }

    if (username.length < 5 || username.length > 25) {
        return false;
    }

    return true;
}

function newUser(username) {
    if (!isValidUsername(username)) {
        throw TypeError(`Invalid Username: ${username}`);
    }

    return {
        username: username,
        "login-time": new Date()
    };
}

module.exports = {
    isValidUsername: isValidUsername,
    newUser: newUser        
};