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
                            return SuccessMessage(true, 'Logged with success.', {
                                token,
                                fullname: data.fullname,
                                gender: data.gender,
                            })
                        })
                        .catch(err=>ErrMessage(err, 'AccountController.Login'))
                        .then((result)=>{
                            return res.status(200).json(result)
                        })
    }
    static InformationByToken(req,res,next){
        const _id = req.body._id
        const Information = new AccountModel()
         const result = Information.InformationByToken(_id)
                       .then(data=>{
                            if(!data) return SuccessMessage(false, 'This credentials are wrong or the user does not exist.')
                            return SuccessMessage(true, 'Informer retrived with success.', {
                                email: data.email,
                                fullname: data. fullname,
                                accountStatus: data.accountStatus,
                                cellphone: data.cellphone,
                                gender: data.gender,
                                officialDocument: data.officialDocument,
                                city_id: data.city,
                                address: data.address,
                                zipcode: data.zipcode
                            })
                        })
                        .catch(err=>ErrMessage(err, 'AccountController.InformationByToken'))
                        .then((result)=>{
                            return res.status(200).json(result)
                        })
    }
    
    static UpdateEmail(req,res,next){
        const _id = req.body._id
        const newEmail = req.body.newEmail

        const Updation = new AccountModel()
        const result = Updation.UpdateEmail(_id, newEmail)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'This credentials are worng or the user does not exist')
                            return SuccessMessage(true, 'Email was updated with success.')
                        })
                        .catch(err=>ErrMessage(err, 'AccountController.UpdateEmail'))
                        .then((result)=>res.status(200).json(result))
    }
    static UpdatePassword(req,res,next){
        const _id = req.body._id
        const newPassword = req.body.newPassword

        const Updation = new AccountModel()
        const result = Updation.UpdatePassword(_id, newPassword)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'This credentials are worng or the user does not exist')
                            return SuccessMessage(true, 'Password was updated with success.')
                        })
                        .catch(err=>ErrMessage(err, 'AccountController.UpdatePassword'))
                        .then((result)=>res.status(200).json(result))
    }
    static Delete(req,res,next){
        const _id = req.body._id
        const email = req.body.email
        const password = req.body.password

        const Deletion = new AccountModel()
        const result = Deletion.Delete(_id, email, password)
                        .then(data=>{
                            console.log(data)
                            if(!data) return SuccessMessage(false, 'This credentials are wrong or the user does not exist')
                            return SuccessMessage(true, 'The user was deleted with success')
                        })
                        .catch(err=>ErrMessage(err, 'AccountController.Delete'))
                        .then((result)=>res.status(200).json(result))
    }
}

module.exports = AccountController