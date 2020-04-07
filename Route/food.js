const router = require('express').Router()
const Food = require('../models/food')

router.get('/', (req, res) => {
    var country = req.body.country

    const getUser =  Food.findOne({}, function (err, result) {
        if (err) {return console.error(err)
        } else {
            res.json(result)
        }
    })
})