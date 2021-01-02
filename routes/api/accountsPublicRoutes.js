/**
 * accountsRoutes.js
 * @summary Handle the routes to /api/private/account
 */
const express = require('express')
const { body } = require('express-validator')
const AccountController = require('../../controllers/AccountController')
const CityModel = require('../../models/CityModel')
const { sessionStatusValidator,
        accountStatusValidator,
        passwordValidator,
        genderValidator,
        zipcodeValidator,
        officialDocumentValidator} = require('../../database/validators/validators')
const route = express.Router()


route.post('/create-new-account', [
    body('sessionStatus').custom((value, {req})=>{
        if(sessionStatusValidator(value)) return true
        throw new Error('This session status is invalid.')
    }),
    body('sessionIP'),
    body('accountStatus').custom((value, {req})=>{
        if(accountStatusValidator(value)) return true
        throw new Error('This account status is invalid.')
    }),
    body('email').isEmail(),
    body('password').custom((value, {req})=>{
        if(passwordValidator(value)) return true
        throw new Error('You can use between 8-16 characters (letters, numbers, @_!-). ')
    }),
    body('cellphone'),
    body('fullname'),
    body('gender').custom((value, {req})=>{
        if(genderValidator(value)) return true
        throw new Error('The genders options are M (male), F (female), O (other). ')
    }),
    body('officialDocument').custom((value, {req})=>{
        if(officialDocumentValidator(value)) return true
        throw new Error('Your document must have 11 numbers (brazilian CPF). ')
    }),
    body('city'),
    body('address'),
    body('zipcode').custom((value, {req})=>{
        if(zipcodeValidator(value)) return true
        throw new Error('Zipcode can to have 8 numbers. ')
    })
], async (req,res,next)=>await AccountController.Create(req,res,next))

route.post('/login', [
    body('email').isEmail(),
    body('password').custom((value, {req})=>{
        if(passwordValidator(value)) return true
        throw new Error('You can use between 8-16 characters (letters, numbers, @_!-). ')
    }),
    body('sessionIP'),
], async (req,res,next)=>await AccountController.Login(req,res,next))



module.exports = route