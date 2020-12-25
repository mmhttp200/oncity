/**
 * emailValidator.js
 * @returns {boolean} if the email is according to the regex
 * @param {string} email 
 */
function emailValidator(email){
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email)) ? true : false
}

module.exports = emailValidator