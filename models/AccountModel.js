/**
 * AccountModel.js
 */

const AccountSchema = require('../database/schemas/AccountSchema')

class AccountModel{

    constructor(){}

    async Create(sessionStatus,
                 sessionIP,
                 accountStatus,
                 email,
                 password,
                 cellphone,
                 fullname,
                 gender,
                 officialDocument,
                 city,
                 address,
                 zipcode){



            const newAccount = new AccountSchema({sessionStatus,
                                                 sessionIP,
                                                 accountStatus,
                                                 email,
                                                 password,
                                                 cellphone,
                                                 fullname,
                                                 gender,
                                                 officialDocument,
                                                 city,
                                                 address,
                                                 zipcode})
            const result = await newAccount.save()
            return result

    }

    async Login(email, password, sessionIP){
        const result = await AccountSchema.findOneAndUpdate({email, password}, {sessionIP})
        return result
    }

}

module.exports = AccountModel