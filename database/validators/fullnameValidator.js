/**
 * fullnameValidator.js
 * @returns {boolean} if the fullname is according to the fullname
 * @param {string} fullname 
 */
function fullnameValidator(fullname){
    return (/^[A-zÀ-ú\s]{4,100}$/g.test(fullname)) ? true : false
}

module.exports = fullnameValidator