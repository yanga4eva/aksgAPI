const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medicalSchema = new Schema({
    name: String,
    type: String,
    hospitalName: String,
    hospitalAddress: String,
    treatment: String,
    prescription: Boolean,
    physician: String,
    insurance: Boolean,
    primaryID: String,
})


module.exports = mongoose.model('Medical', medicalSchema)