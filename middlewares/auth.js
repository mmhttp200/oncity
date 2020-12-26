const ErrMessage = require("../helpers/ErrMessage")
const { getPayload } = require("../helpers/jwtHelper")

/**
 * @summary Handle authentication jwt from the request
 * @param {object} req from express
 * @param {object} res from express
 * @param {object} next from express
 */
function auth(req,res,next){

    const token = req.get('token')

    if(!token) return res.status(200).json(ErrMessage('Invalid token', 'auth middleware'))

    const payload = getPayload(token)
    req.body._id = payload._id

    next()
}

module.exports = auth