/**
 * @desc Prepare the error messages to client
 * @returns {literal object} {success: false, errorCode, message, errors: [{key, message}]}
 * @param {object} err from Promise.catch(err)
 */
function ErrMessage(err = undefined, context = ""){

    console.error(context)

    if(err == undefined) return {   success: false,
                        errorCode: "UNKNOWN-INTERNAL-SERVER-ERROR-000",
                        message: "Internal error from server. Try again later.",
                        errors: []}
    if(typeof err == "String") return {success: false, message: err, context}
    if(err.code) return ErrorMessageByCode(err)

}

function ErrorMessageByCode(err){
    switch(err.code){
        case 11000:
            const isDuplicaded = (['email', 'cellphone', 'officialDocument'].indexOf(Object.keys(err.keyPattern)[0]) != -1) ? true : false;
            if(isDuplicaded) return {success: false, message: `Use another ${Object.keys(err.keyPattern)[0]} because this is already in use.`}
            return {success: false, message: `Verify if your ${Object.keys(err.keyPattern)[0]} is valid.`}
        default:
            return {success: false, message: "Internal Error. Try again later. Context: AccountController, line 60."}
    }
}

module.exports = ErrMessage