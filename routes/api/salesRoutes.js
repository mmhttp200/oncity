const express = require('express')
const {SaleController} = require('../../header')
const route = express.Router()

route.get('/sale/:id', (req,res,next)=>SaleController.Information)
route.post('/create-new-sale', (req,res,next)=>SaleController.Create)
route.put('/update-sale', (req,res,next)=>SaleController.Update)
route.delete('/delete-sale', (req,res,next)=>SaleController.Delete)

module.exports = route