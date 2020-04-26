const mongoose = require('mongoose')
const Schema = mongoose.Schema

const educationSchema = new Schema({
    institution: String,
    type: String,
    completion: Boolean,
    startDate: String,
    status: Boolean,
    primaryID: String,
    institutionID: Number,
    institutionContact: Number,
    currentLevel: String,
    infractions: Boolean,
    degree: String,
    gradeLevel: String,
})


module.exports = mongoose.model('Education', educationSchema)