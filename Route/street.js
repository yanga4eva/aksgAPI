const router = require('express').Router()
const Street = require('../models/street')


router.post('/', (req, res) => {
    const street = new Street ({
        name: req.body.name,
        lga: req.body.lga,
        clan: req.body.clan,
        village: req.body.village
    })

    const savestreet = street.save(function (err, user) {
        if (err) {return console.error(err)
        } else {
            res.send("Saved")
        }
    })
})

router.get('/findall', (req, res) => {
    var datafilter = req.body.datafilter

    const getUser =  Street.find({}, datafilter, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
    
})

module.exports = router;