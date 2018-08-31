
function isValidUsername(username) {
    if (typeof username !== 'string') {
        throw new TypeError();
    }

    if (username.length < 5 || username.length > 25) {
        return false;
    }

    return true;
}

function newUser(username) {
    if (!isValidUsername(username)) {
        throw TypeError();
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