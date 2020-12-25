/**
 * sessionStatusValidator.js
 * @desc 0 = offline || 1 = online
 * @returns {boolean} if status is 0 or 1
 * @param {number} status 
 */
function sessionStatusValidator(status){
    return (status == 0 || status == 1) ? true : false
}

module.exports = sessionStatusValidator