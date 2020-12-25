/**
 * accountsRoutes.js
 * @summary Handle the routes to /api/private/account
 */
const express = require('express')
const {AccountController} = require('../../header')
const route = express.Router()

route.post('/create-new-account', (req,res,next)=>AccountController.Create)
route.post('/login', (req,res,next)=>AccountController.Login)
route.post('/logout', (req,res,next)=>AccountController.Logout)
route.get('/account-information/:id', (req,res,next)=>AccountController.Information)
route.delete('/delete-account', (req,res,next)=>AccountController.Delete)
route.put('/update-account', (req,res,next)=>AccountController.Update)

module.exports = route