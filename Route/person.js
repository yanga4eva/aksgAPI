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
            res.send(saveUser)
        }
    })
})

router.get('/',   async (req, res) => {
    
    res.send('<body><form autocomplete="off" method="POST" action="/person" class="form-inline my-2 my-lg-0" style="float: right; z-index: -1;" ><input class="form-control mr-sm-2" type="text" placeholder="firstname" aria-label="Search" id="verses" name="firstname" value= ""><input class="btn btn-secondary my-2 my-sm-0" type="submit" value="Submit"></form></body>')
    
})

module.exports = router;