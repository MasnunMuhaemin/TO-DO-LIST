const express = require('express')
const userController = require('../controller/users')
const route = express.Router()

// GET ALL TODOS
route.get('/', userController.getAllUsers)

// CREATE TODOS
route.post('/', userController.createNewUsers)

module.exports = route