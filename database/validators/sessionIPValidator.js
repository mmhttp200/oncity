/**
 * sessionIPValidator.js
 * @returns {boolean} if ip is according to regex (IPV4)
 * @param {string} ip 
 */
function sessionIPValidator(ip){
    return (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g.test(ip)) ? true : false
}

module.exports = sessionIPValidator