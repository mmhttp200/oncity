const express = require('express')
const PageController = require('../../controllers/PageController')
const route = express.Router()

route.get('/page/:uri', (req,res,next)=>PageController.Information(req,res,next))

module.exports = route