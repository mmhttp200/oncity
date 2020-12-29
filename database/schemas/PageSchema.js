/**
 * PageSchema.js
 * @summary Handle the creation of new documents in pages' collection on database
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

const ItemSchema = new Schema({
    category_index: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const ContactSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const PageSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        unique: true
    },
    category_id: {
        type: String,
        required: true
    },
    subcategory_index: {
        type: Number
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    name: {
        type: String,
        required: true
    },
    keywords: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    contacts: {
        type: [ContactSchema]
    },
    about: {
        type: String,
        required: true
    },
    itens_categories: {
        type: [ItemCategorySchema]
    }, 
    itens: {
        type: [ItemSchema]
    }
})

module.exports = mongoose.model('page', PageSchema,'pages')