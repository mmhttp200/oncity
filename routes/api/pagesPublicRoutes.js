const express = require('express')
const {PageController} = require('../../header')
const route = express.Router()

route.get('/page/:uri', (req,res,next)=>PageController.Information)

module.exports = route