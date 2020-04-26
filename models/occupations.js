const mongoose = require('mongoose')
const Schema = mongoose.Schema

const occupationSchema = new Schema({
    company: String,
    type: String,
    address: String,
    startDate: String,
    status: Boolean,
    primaryID: String,
    streetName: String,
    lga: String,
    supervisor: String,
    primaryID: String,
    income: Number,
    ceo:  String,
    contact: String,
})


module.exports = mongoose.model('Occupation', occupationSchema)