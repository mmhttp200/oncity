/**
 * AccountController.js
 */
const SuccessMessage = require('../helpers/SuccessMessage')
const ErrMessage = require('../helpers/ErrMessage')
const AccountModel = require('../models/AccountModel')
const {validationResult} = require('express-validator');
const { getToken } = require('../helpers/jwtHelper');

class AccountController{

    constructor(){}

    /**
     * @summary Handle route to create a new account
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object}
     * @param {object} req 
     * @param {object} res 
     * @param {object} next 
     */
    static Create(req,res,next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).json({ success: false, message: "Invalid data", errors: errors.array() });
        }

        const newAccount = new AccountModel()

        const sessionStatus = req.body.sessionStatus
        const sessionIP = req.body.sessionIP
        const accountStatus = req.body.accountStatus
        const email = req.body.email
        const password = req.body.password
        const cellphone = req.body.cellphone
        const fullname = req.body.fullname
        const gender = req.body.gender
        const officialDocument = req.body.officialDocument
        const city = req.body.city
        const address = req.body.address
        const zipcode = req.body.zipcode

        const result = newAccount.Create(sessionStatus,
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
                                         zipcode
                                         ).then(data=>SuccessMessage(true, 'The new account was created with success.', data))
                                        .catch(err=>ErrMessage(err, 'AccountController'))
                                        .then((result)=>{
                                            return res.status(200).json(result)
                                        })

    }
    static Login(req,res,next){
        const email = req.body.email
        const password = req.body.password
        const sessionIP = req.body.sessionIP
        const Session = new AccountModel()
        const result = Session.Login(email, password, sessionIP)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'This credentials are wrong or the user does not exist.')
                            const token = getToken({_id: data._id})
                            return SuccessMessage(true, 'Logged with success.', {token})
                        })
                        .catch(err=>ErrMessage(err, 'AccountController.Login'))
                        .then((result)=>{
                            return res.status(200).json(result)
                        })
    }
    static Information(req,res,next){}
    static Delete(req,res,next){}
    static UpdateEmail(req,res,next){}
    static UpdatePassword(req,res,next){}
}

module.exports = AccountController