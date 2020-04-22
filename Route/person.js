const router = require('express').Router()
const Person = require('../models/person')
const Food = require('../models/food')

router.get('/food/:country', (req, res, next) => {
    const favcountry = req.params.country
    const getUser =  Food.findOne({country: favcountry}, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
})

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
    var query = req.query

    const getUser =  Person.find({query}, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
    
})

router.get('/findperson', (req, res) => {
    var findparams = req.body.findparam
    var datafilter = req.body.datafilter

    const getUser =  Person.findOne(findparams, datafilter, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
})
    

    router.get('/findall', (req, res) => {
    var datafilter = req.body.datafilter

    const getUser =  Person.find({}, datafilter, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
    
})

module.exports = router;