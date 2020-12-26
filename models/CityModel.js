const CitySchema = require('../database/schemas/CitySchema')

class CityModel{

    async verifyCityId(_id){
        return true;
    }

}