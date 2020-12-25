/**
 * passwordValidator.js
 * @returns {boolean} if the password is according to regex
 * @param {string} password 
 */
function passwordValidator(password){
    return (/^[a-zA-Z0-9@_!-]{8,16}$/g.test(password)) ? true : false
}

module.exports = passwordValidator