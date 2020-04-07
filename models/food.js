const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: String,
    history: String,
    recipe: String,
    procedure: String,
    country: String
})


module.exports = mongoose.model('Food', personSchema)