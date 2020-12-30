const CitySchema = require('../database/schemas/CitySchema')

class CityModel{

    async verifyCityId(_id){
        const result = await CitySchema.findOne({_id})
        return result
    }

}

module.exports = CityModel