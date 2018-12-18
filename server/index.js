
const express = require('express')

const bodyParser = require('body-parser')

const massive = require('massive')

const cc = require ('./controllers/characterController')
const authcontrol = require('./controllers/Auth')

const session = require('express-session')
const path = require('path')
require('dotenv').config()


const app = express();

const {CONNECTION_STRING, SERVER_PORT: PORT, SESSION_SECRET}= process.env


app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected!')
  })

  app.use( express.static( `${__dirname}/../build` ) );

app.post('/auth/login', authcontrol.login)
app.post('/auth/register', authcontrol.register)
app.get('/auth/logout', authcontrol.logout)
app.get('/auth/currentUser',authcontrol.getCurrentUser)
app.get('/auth/loginCheck', authcontrol.checkLogin)

app.get('/api/characters/:id',cc.getCharacterById)
app.post('/api/characters/bio', cc.addBio)
app.post('/api/characters/abilities',cc.addAbilities)
app.post('/api/characters/details',cc.addDetails)
app.post('/api/characters/other',cc.addOther)
app.post('/api/characters/powers',cc.addPowers)
app.post('/api/characters/skills',cc.addSkills)
app.post('/api/characters/inventory', cc.addInventory)






app.listen(PORT, () => {
    console.log('listening on port', PORT)
  })