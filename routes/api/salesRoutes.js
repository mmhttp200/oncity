const express = require('express')
const SaleController = require('../../controllers/SaleController')
const route = express.Router()

route.get('/sale/:id', (req,res,next)=>SaleController.Information(req,res,next))
route.post('/create-new-sale', (req,res,next)=>SaleController.Create(req,res,next))
route.put('/update-sale', (req,res,next)=>SaleController.Update(req,res,next))
route.delete('/delete-sale', (req,res,next)=>SaleController.Delete(req,res,next))

module.exports = route