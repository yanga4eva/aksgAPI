const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: String,
    type: String,
    addressNo: String,
    streetName: String,
    lga: String,
    registrationDate: String,
    licensed: Boolean,
    Ownder: String,
    contact: String
})


module.exports = mongoose.model('Institution', personSchema)