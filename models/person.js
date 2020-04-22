const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    fathersFirstName: String,
    fathersLastName: String,
    mothersFirstName: String,
    mothersLastName: String,
    addressNo: String,
    streetName: String,
    stateg: String,
    married: Boolean,
    spouse: String,
    kids: Boolean,
    lga: String,
    created: Date,
    occupation: String,
    title: String,
    employed: Boolean,
    employer: String,
    infraction: Boolean,
    medicalCondition: Boolean,
    previousJobs: {
        type : String,
        default: undefined
    },
    previousAddress: {
        type: String,
        default: undefined
    },
    DOB: Date
})


module.exports = mongoose.model('Person', personSchema)