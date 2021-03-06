/**
 * AccountSchema.js
 * @summary Handle the creation of new documents in accounts' collection on database
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Validators
const { accountStatusValidator,
        cellphoneValidator,
        cityValidator,
        emailValidator,
        fullnameValidator,
        genderValidator,
        passwordValidator,
        sessionStatusValidator,
        zipcodeValidator } = require('../validators/validators')

/**
 * @constructor
 * @summary The schema to create new documents on accounts' collection
 * @param {number} sessionStatus 0 = offline || 1 = online
 * @param {number} sessionIP 0 = offline || ip number (only numbers) = online using this ip
 * @param {number} accountStatus 0 = email not confirmed | 1 = email is confirmed | -1 = account deletion requested | -2 = account blocked.
 * @param {string} email an unique account email
 * @param {string} password
 * @param {number} cellphone an unique cellphone
 * @param {string} fullname
 * @param {string} gender M = male | F = female | O = other
 * @param {number} officialDocument an unique official identification document (only numbers)
 * @param {string} city string with objectId from a city in city's collection
 * @param {string} address Example: street and house's number
 * @param {number} zipcode (only numbers)
 */
const AccountSchema = new Schema({

    sessionStatus: {
        type: Number,
        default: 0,
        required: true,
        validate: {
            validator: sessionStatusValidator,
            message: "This session number is not recognized."
        }
    },
    sessionIP: {
        type: Number,
        default: 0,
        required: true
    },
    accountStatus: {
        type: Number,
        default: 0,
        required: true,
        validate: {
            validator: accountStatusValidator,
            message: "This account status is not recognized."
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: emailValidator,
            message: "Use a valid email."
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: passwordValidator,
            message: "Use a valid password, with min 8 characters and max 16 characters, only numbers, letters, and @_-!."
        }
    },
    cellphone: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: cellphoneValidator,
            message: "Use a valid cellphone."
        }
    },
    fullname: {
        type: String,
        required: true,
        validate: {
            validator: fullnameValidator,
            message: "Write a valid fullname, only letters."
        }
    },
    gender: {
        type: String,
        required: true,
        validate: {
            validator: genderValidator,
            message: "Use a valid option to gender. Male, Female, or Other."
        }
    },
    officialDocument: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: cityValidator,
            message: "Use a valid city."
        }
    },
    address: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true,
        validate: {
            validator: zipcodeValidator,
            message: "Use a valid zipcode (Brazilian format)"
        }
    }

})

module.exports = mongoose.model('account', AccountSchema, 'accounts')