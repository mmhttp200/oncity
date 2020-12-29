const express = require('express')
const {body} = require('express-validator')
const PageController = require('../../controllers/PageController')
const route = express.Router()

route.post('/create-new-page', [
    body('category_id'),
    body('status'),
    body('name'),
    body('keywords'),
    body('city'),
    body('about')
], (req,res,next)=>PageController.Create(req,res,next))
route.put('/update-page', [
    body('page_id'),
    body('updated_data')
], (req,res,next)=>PageController.Update(req,res,next))
route.delete('/delete-page', [
    body('page_id')
], (req,res,next)=>PageController.Delete(req,res,next))

module.exports = route