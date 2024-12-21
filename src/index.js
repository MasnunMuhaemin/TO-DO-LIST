const express = require('express')
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/logs')
require('dotenv').config()

const app = express()

app.use(middlewareLogRequest)

app.use('/todos', usersRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Berjalan Pada Port ${process.env.PORT}`)
})