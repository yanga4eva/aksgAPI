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

router.get('/',   async (req, res) => {
    
    res.send('<body><form autocomplete="off" method="POST" action="/person" class="form-inline my-2 my-lg-0" style="float: right; z-index: -1;" ><input class="form-control mr-sm-2" type="text" placeholder="firstname" aria-label="Search" id="verses" name="firstname" value= ""><input class="btn btn-secondary my-2 my-sm-0" type="submit" value="Submit"></form></body>')
    
})

module.exports = router;