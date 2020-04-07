const Express = require('express')
const Mongoose = require('mongoose')
const BodyParser = require('body-parser')
const dotenv = require('dotenv')
const Port = process.env.PORT || 8082
const path = require('path')
const cors = require('cors')

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

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))

//Routes
const personRoute = require('./Route/person')
const instituteRoute = require('./Route/institution')

// //Middlewares
app.use(cors())
app.use('/person', personRoute)
app.use('/institute', instituteRoute)


// View Enger
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(Express.static(path.resolve('./views')));

app.get('/', (req, res) => {

    res.render("index")
})

app.listen(Port, () => {
    console.log('Server on')
})