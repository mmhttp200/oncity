/**
 * accountsRoutes.js
 * @summary Handle the routes to /api/private/account
 */
const express = require('express')
const { body } = require('express-validator')
const AccountController = require('../../controllers/AccountController')
const route = express.Router()


route.post('/create-new-account', [
    body('sessionStatus'),
    body('sessionIP'),
    body('accountStatus'),
    body('email').isEmail(),
    body('password'),
    body('cellphone'),
    body('fullname'),
    body('gender'),
    body('officialDocument'),
    body('city'),
    body('address'),
    body('zipcode')
], async (req,res,next)=>await AccountController.Create(req,res,next))

route.post('/login', [
    body('email'),
    body('password'),
    body('sessionIP'),
], async (req,res,next)=>await AccountController.Login(req,res,next))



module.exports = route