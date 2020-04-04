const Express = require('express')
const Mongoose = require('mongoose')
const BodyParser = require('body-parser')
const dotenv = require('dotenv')
const Port = process.env.PORT || 8000
const path = require('path')

dotenv.config()

// Connect to DB
Mongoose.connect(
    process.env.DB_CONNECT,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log("DB Connected"));

const app = Express()

// View Enger
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(Express.static(path.resolve('./views')));


app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {

    res.render("index")
})

app.listen(Port, () => {
    console.log('Server on')
})