/**
 * cityValidator.js
 * @returns {boolean} if the city exists in database
 * @param {string} city 
 */

const {CityModel} = require('../../header')

function cityValidator(city){
    try{
        const result = CityModel.verifyCityId(city)
        return (result) ? true : false;
    }
    catch(err){
        console.error(err.message)
        process.exit(0)
    }
}

module.exports = cityValidator