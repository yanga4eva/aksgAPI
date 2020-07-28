const router = require('express').Router()
const fetch = require('node-fetch');

router.get('/login', (req, res) => {
    var newtoke = req.query.token
    fetch('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + newtoke, {method: 'get'})
    .then(res => res.json()) 
    .then(json => {
         json.error != undefined ? res.send('Invalid Token') : res.send('Welcome')
         
    });
    // console.log(newtoke)
})

module.exports = router;