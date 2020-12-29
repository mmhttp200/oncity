/**
 * @summary Create a literal object to send responses to the client.
 * @returns {literal object} {success: false, message, context, data}
 * @param {literal object} err Use {code: undefined} if you have not a error code.
 * @param {string} message 
 * @param {string} context 
 * @param {literal object} data 
 */
function ErrMessage(err = {code: undefined}, message = "", context = "", data = {}){

    switch(err.code){
        case 11000:
            return ErrCode11000(err, message, context, data)
        default:
            return {success: false, message, context, data}
    }

}

/**
 * @summary Mongoose err.code 110000
 * @param {literal object} err 
 * @param {string} message 
 * @param {string} context 
 * @param {literal object} data 
 */
function ErrCode11000(err, message, context, data){

    const isDuplicaded = (['email', 'cellphone', 'officialDocument'].indexOf(Object.keys(err.keyPattern)[0]) != -1) ? true : false
    if(isDuplicaded) return {success: false, message: `Use another ${Object.keys(err.keyPattern)[0]} because this is already in use.`, context, data}
    return {success: false, message: `Verify if your ${Object.keys(err.keyPattern)[0]} is valid.`, context, data}

}

module.exports = ErrMessage