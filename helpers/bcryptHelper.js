/**
 * bcryptHelper.js
 */

const { genSaltSync, hashSync, compareSync } = require("bcryptjs");

function generateHash(value){
    const salt = genSaltSync(process.env.BCRYPT_ROUNDS)
    const hash = hashSync(value, salt)
    return hash
}

function verifyHash(value, hash){
    const result = compareSync(value, hash)
    return result
}

module.exports.generateHash = generateHash
module.exports.verifyHash = verifyHash