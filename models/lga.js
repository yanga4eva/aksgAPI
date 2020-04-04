const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: String,
    village: String,
    clan: String
})


module.exports = mongoose.model('LGA', personSchema)