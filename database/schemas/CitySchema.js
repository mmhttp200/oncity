const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: {
        type: String
    },
    countryId: {
        type: String
    },
    stateId: {
        type: String
    }
})

module.exports = mongoose.model('city', CitySchema)