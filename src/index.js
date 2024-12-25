const express = require('express')
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/logs')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(middlewareLogRequest)

app.use('/todos', usersRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Berjalan Pada Port ${process.env.PORT}`)
})