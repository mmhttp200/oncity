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
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Create(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'AccountController.Create', errors.array())
            return res.status(200).json(result);
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
                                         )
                                         .then(data=>SuccessMessage(true, 'The new account was created with success.', data))
                                        .then(result=>{
                                            return res.status(200).json(result)
                                        })
                                        .catch(err=>{
                                            const result = ErrMessage(err, 'The account cannot be created.', 'AccountController.Create', err)
                                            return res.status(200).json({...result})
                                        })

    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Login(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'AccountController.Login', errors.array())
            return res.status(200).json(result);
        }

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
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This account cannot to do login.', 'AccountController.Login', err)
                            return res.status(200).json(result)
                        })
                        .then((result)=>{
                            return res.status(200).json(result)
                        })
    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static InformationByToken(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'AccountController.InformationByToken', errors.array())
            return res.status(200).json(result);
        }

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
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This token is invalid.', 'AccountController.InformationByToken', err)
                            return res.status(200).json(result)
                        })
                        .then((result)=>{
                            return res.status(200).json(result)
                        })
    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static UpdateEmail(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'AccountController.UpdateEmail', errors.array())
            return res.status(200).json(result);
        }
        
        const _id = req.body._id
        const newEmail = req.body.newEmail

        const Updation = new AccountModel()
        const result = Updation.UpdateEmail(_id, newEmail)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'This credentials are worng or the user does not exist')
                            return SuccessMessage(true, 'Email was updated with success.')
                        })
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This email cannot be updated.', 'AccountController.UpdateEmail', err)
                            return res.status(200).json(result)
                        })
                        .then((result)=>res.status(200).json(result))
    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static UpdatePassword(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'AccountController.UpdatePassword', errors.array())
            return res.status(200).json(result);
        }

        const _id = req.body._id
        const newPassword = req.body.newPassword

        const Updation = new AccountModel()
        const result = Updation.UpdatePassword(_id, newPassword)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'This credentials are worng or the user does not exist')
                            return SuccessMessage(true, 'Password was updated with success.')
                        })
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This password cannot be updated.', 'AccountController.UpdatePassword', err)
                            return res.status(200).json(result)
                        })
                        .then((result)=>res.status(200).json(result))
    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Delete(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'AccountController.Delete', errors.array())
            return res.status(200).json(result);
        }
        
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
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This account cannot be deleted.', 'AccountController.Delete', err)
                            return res.status(200).json(result)
                        })
                        .then((result)=>res.status(200).json(result))
    }
}

module.exports = AccountController