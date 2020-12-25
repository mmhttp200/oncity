/**
 * accountStatusValidator.js
 * @desc 0 = email not confirmed |
 *  1 = email is confirmed |
 *  -1 = account deletion requested |
 *  -2 = account blocked.
 * @param {number} status 
 * @returns {boolean} true if the status if between [-2, 1]
 */
function accountStatusValidator(status){
    return (status >= -2 && status<=1)
}

module.exports = accountStatusValidator