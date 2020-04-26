const router = require('express').Router()
const Occupations = require('../models/occupations')


router.post('/', (req, res) => {
    const occupation = new Occupations ({
        company: req.body.company,
        type: req.body.type,
        address: req.body.addressNo,
        startDate: req.body.startDate,
        status: true,
        primaryID: req.body.primaryID,
        streetName: req.body.streetName,
        lga: req.body.lga,
        supervisor: req.body.supervisor,
        income: req.body.income,
        ceo: req.body.ceo,
        contact: req.body.contact
    })
    const saveUser = occupation.save(function (err, result) {
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

    const getUser =  Occupations.find(query, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })}
    
})

module.exports = router;