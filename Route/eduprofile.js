const router = require('express').Router()
const Education = require('../models/educations')


router.post('/', (req, res) => {
    const education = new Education ({
        institution: req.body.institution,
    type: req.body.type,
    completion: false,
    startDate: req.body.startData,
    status: true,
    primaryID: req.body.primaryID,
    institutionID: req.body.institutionID,
    institutionContact: req.body.institutionContact,
    currentLevel: req.body.currentLevel,
    infractions: false,
    degree: req.body.degree,
    gradeLevel: req.body.gradeLevel
    })
    const saveUser = education.save(function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
})

router.get('/', (req, res) => {
    const query = req.query
    if(!query){
        res.send("please include query")
    }
    else 
    {

    const getUser =  Education.find(query, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })}
    
})

module.exports = router;