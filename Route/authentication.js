const router = require('express').Router()

router.get('/Login', (res, req) => {
    const token = req.body.token
    fetch('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + token)
    .then(res => res.json()) 
    .then(json => {
        !res.error ? res.send('Invalid Toke') : res.send(res.access_type)
    });
})