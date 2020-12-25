const express = require('express')
const {PageController} = require('../../header')
const route = express.Router()

route.post('/create-new-page', (req,res,next)=>PageController.Create)
route.put('/update-page', (req,res,next)=>PageController.Update)
route.delete('/delete-page', (req,res,next)=>PageController.Delete)

module.exports = route