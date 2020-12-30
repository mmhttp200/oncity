/**
 * PageModel.js
 */

const PageSchema = require('../database/schemas/PageSchema')

class PageModel{

    constructor(){}

    async Create(   user_id,
                    category_id,
                    uri,
                    status,
                    name,
                    keywords,
                    city,
                    about
                    ){

            const newPage = new PageSchema({user_id,
                                            category_id,
                                            uri,
                                            status,
                                            name,
                                            keywords,
                                            city,
                                            about})

            const result = await newPage.save()
            return result

    }

    async InformationByURI(uri){
        const result = await PageSchema.findOne({uri})
        return result
    }

    async Delete(_id, user_id){
        const result = await PageSchema.deleteOne({_id, user_id})
        return result;
    }

    async Update(_id, user_id, updated_data){
        const result = await PageSchema.findByIdAndUpdate({_id, user_id}, {...updated_data})
        return result;
    }

}

module.exports = PageModel