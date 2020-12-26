/**
 * jwtHelper.js
 * @summary handle JWT operations
 */
const jwt = require('jsonwebtoken')

function getToken(payload = {}){
    return jwt.sign(payload, process.env.JWT_PRIVATE_KEY)
}

function getPayload(token){
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY)
}

module.exports.getToken = getToken
module.exports.getPayload = getPayload