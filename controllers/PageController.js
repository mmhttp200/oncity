/**
 * PageController.js
 */
const {validationResult} = require('express-validator')
const PageModel = require('../models/PageModel')
const ErrMessage = require('../helpers/ErrMessage')
const SuccessMessage = require('../helpers/SuccessMessage')

class PageController{

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Create(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'PageController.Create', errors.array())
            return res.status(200).json(result);
        }

        const newPage = new PageModel()

        const user_id = req.body._id
        const category_id = req.body.category_id
        const uri = req.body.uri
        const status = req.body.status
        const name = req.body.name
        const keywords = req.body.keywords
        const city = req.body.city
        const about = req.body.about
        

        const result = newPage.Create(  user_id,
                                        category_id,
                                        uri,
                                        status,
                                        name,
                                        keywords,
                                        city,
                                        about
                                         ).then(data=>SuccessMessage(true, 'The new page was created with success.', data))
                                        .catch(err=>{
                                            const result = ErrMessage({code: undefined}, 'This page cannot be created.', 'PageController.Create', err)
                                            return res.status(200).json({...result})
                                        })
                                        .then((result)=>{
                                            return res.status(200).json(result)
                                        })

    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Information(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'PageController.Information', errors.array())
            return res.status(200).json(result);
        }

        const uri = req.params.uri

        const Information = new PageModel()
        const result = Information.InformationByURI(uri)
                        .then((data)=>{
                            if(data) return SuccessMessage(true, 'The page was founded with success.', data)
                            return SuccessMessage(false, 'The page was not founded.', data)
                        })
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This page cannot be founded by URI.', 'PageController.Information', err)
                            return res.status(200).json(result)
                        })
                        .then(result=>{
                            return res.status(200).json(result)
                        })


    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Delete(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'PageController.Delete', errors.array())
            return res.status(200).json(result);
        }

        const _id = req.body.page_id
        const user_id = req.body._id
        const Page = new PageModel()
        const result = Page.Delete(_id, user_id)
                        .then(data=>SuccessMessage(true, 'Page was deleted', data))
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'Thsi page cannot be deleted.', 'PageController.Delete', err)
                            return res.status(200).json(result)
                        })
                        .then(result=>res.status(200).json(result))
    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Update(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'PageController.Update', errors.array())
            return res.status(200).json(result);
        }

        const user_id = req.body._id
        const _id = req.body.page_id
        const updated_data = req.body.updated_data
        const Page = new PageModel()
        const result = Page.Update(_id, user_id, updated_data)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'Page does not exist.')
                            return SuccessMessage(true, 'Page was updated.')
                        })
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This page cannot be updated.', 'PageController.Update', err)
                            return res.status(200).json(result)
                        })
                        .then(result=>res.status(200).json(result))
    }

    /**
     * @summary handle routing
     * @returns {literal object} {success: Boolean, message: String, data: Literal Object, context: String}
     * @param {literal object} req Request from Express routing
     * @param {literal object} res Response from Express routing
     * @param {function} next next() from Express routing
     */
    static Delete(req,res,next){
        //Verify the {body} from express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const result = ErrMessage({code: undefined}, "Invalid data.", 'PageController.Create', errors.array())
            return res.status(200).json(result);
        }

        const _id = req.body.page_id
        const user_id = req.body._id
        const Page = new PageModel()
        const result = Page.Delete(_id, user_id)
                        .then(data=>{
                            if(!data) return SuccessMessage(false, 'Page does not exist.')
                            return SuccessMessage(true, 'Page was deleted.')
                        })
                        .catch(err=>{
                            const result = ErrMessage({code: undefined}, 'This page cannot be deleted.', 'PageController.Delete', err)
                            return res.status(200).json(result)
                        })
                        .then(result=>res.status(200).json(result))
    }

}

module.exports = PageController