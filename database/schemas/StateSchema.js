/**
 * StateSchema.js
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('state', StateSchema)