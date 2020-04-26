const router = require('express').Router()
const Infraction = require('../models/infractions')


router.post('/', (req, res) => {
    const infraction = new Infraction ({
        reportingInstitution: req.body.reportingInstitution,
        type: req.body.type,
        location: req.body.location,
        reportingOfficer: req.body.reportingOfficer,
        status: yes,
        event: req.body.event,
        verdict: req.body.verdict,
        offender: req.body.offender,
        victim:req.body.victim,
    })
    const saveUser = infraction.save(function (err, result) {
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

    const getUser =  Infraction.find(query, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })}
    
})

module.exports = router;