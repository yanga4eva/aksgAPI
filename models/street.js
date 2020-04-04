const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: String,
    lga: String,
    clan: String,
    village: String
})


module.exports = mongoose.model('Street', personSchema)