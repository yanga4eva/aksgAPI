const router = require('express').Router()
const Medicals = require('../models/medicals')


router.post('/', (req, res) => {
    const medicals = new Medicals ({
        name: req.body.name,
        type: req.body.type,
        hospitalName: req.body.hospitalName,
        hospitalAddress: req.body.hospitalAddress,
        treatment: req.body.treatment,
        prescription: false,
        physician: req.body.physician,
        insurance: false,
        primaryID: req.body.primaryID

    })
    const saveUser = medicals.save(function (err, meds) {
        if (err) {return console.error(err)
        } else {
            res.json(meds)
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

    const getUser =  Medicals.find(query, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })}
    
})

module.exports = router;