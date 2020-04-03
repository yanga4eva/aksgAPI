const Express = require('express')
const Mongoose = require('mongoose')
const BodyParser = require('body-parser')
const Port = process.env.PORT || 8000

const app = Express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {

    res.send("Propsed Akwa Ibom State Digital Project")
})

app.listen(Port, () => {
    console.log('Server on')
})