/**
 * @desc Prepare the error messages to client
 * @returns {literal object} {success: true,  message, data: []}
 * @param {object} err from Promise.catch(err)
 */
function SuccessMessage(success = true, message, ...rest){
    return {success, message, data: rest}
}


module.exports = SuccessMessage