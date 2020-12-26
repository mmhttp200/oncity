/**
 * AccountModel.js
 */

const AccountSchema = require('../database/schemas/AccountSchema')
const jwt = require('../helpers/jwtHelper')

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

    async InformationByToken(_id){
        console.log(_id)
        const result = await AccountSchema.findOne({_id})
        console.log(result)
        return result
    }

    async UpdateEmail(_id, email){
        const result = await AccountSchema.findOneAndUpdate({_id}, {email})
        return result
    }

    async UpdatePassword(_id, password){
        const result = await AccountSchema.findOneAndUpdate({_id}, {password})
        return result
    }

    async Delete(_id, email, password){
        const result = await AccountSchema.deleteOne({_id, email, password})
        return result;
    }

}

module.exports = AccountModel