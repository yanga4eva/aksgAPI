const router = require('express').Router()
const Person = require('../models/person')

router.post('/', (req, res) => {
    const person = new Person ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        fathersFirstName: req.body.fathersFirstName,
        fathersLastName: req.body.fathersLastName,
        mothersFirstName: req.body.mothersFirstName,
        mothersLastName: req.body.mothersLastName,
        addressNo: req.body.addressNo,
        streetName: req.body.streetName,
        stateg: req.body.stateg,
        lga: req.body.lga,
        created: Date.now(),
        occupation:req.body.occupation,
        title: req.body.title,
        employer: req.body.employer,
        DOB: req.body.DOB
    })
    const saveUser = person.save(function (err, user) {
        if (err) {return console.error(err)
        } else {
            res.json(user)
        }
    })
})

router.get('/', (req, res) => {

    const getUser = await Person.find({}, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
    
    
})

module.exports = router;