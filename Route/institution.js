const router = require('express').Router()
const Institute = require('../models/institution')



router.post('/', (req, res) => {
    const institute = new Institute ({
        name: req.body.name,
        type: req.body.type,
        fathersFirstName: req.body.fathersFirstName,
        addressNo: req.body.addressNo,
        streetName: req.body.streetName,
        lga: req.body.lga,
        registrationDate: req.body.registrationDate,
        licensed: req.body.licensed,
        owner: req.body.owner,
        contact: req.body.contact
    })
    const saveInstitute = institute.save(function (err, user) {
        if (err) {return console.error(err)
        } else {
            res.send("Saved")
        }
    })
})

router.get('/findall', (req, res) => {
    var datafilter = req.body.datafilter

    const institution =  Institute.find({}, datafilter, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
    
})

module.exports = router;