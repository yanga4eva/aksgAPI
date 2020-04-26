const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infractionSchema = new Schema({
    reportingInstitution: String,
    type: String,
    location: String,
    primaryID: String,
    reportingOfficer: String,
    status: Boolean,
    event: String,
    verdict: String,
    victim: String,

})


module.exports = mongoose.model('Infraction', infractionSchema)