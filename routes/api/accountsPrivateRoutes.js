/**
 * accountsRoutes.js
 * @summary Handle the routes to /api/private/account
 */
const express = require('express')
const {body} = require('express-validator')
const AccountController = require('../../controllers/AccountController')
const route = express.Router()

route.get('/account-information', (req,res,next)=>AccountController.InformationByToken(req,res,next))
route.delete('/delete-account', [
    body('email'),
    body('password')
],(req,res,next)=>AccountController.Delete(req,res,next))
route.put('/update-account-email', [
    body('newEmail').isEmail()
], (req,res,next)=>AccountController.UpdateEmail(req,res,next))
route.put('/update-account-password', [
    body('newPassword')
],(req,res,next)=>AccountController.UpdatePassword(req,res,next))

module.exports = route