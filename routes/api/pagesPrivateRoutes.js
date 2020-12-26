const express = require('express')
const PageController = require('../../controllers/PageController')
const route = express.Router()

route.post('/create-new-page', (req,res,next)=>PageController.Create(req,res,next))
route.put('/update-page', (req,res,next)=>PageController.Update(req,res,next))
route.delete('/delete-page', (req,res,next)=>PageController.Delete(req,res,next))

module.exports = route