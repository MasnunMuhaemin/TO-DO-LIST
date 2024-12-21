const todosModels = require('../models/users')
const getAllUsers = async (req, res) => {
    const data = await todosModels.getAllUsers()
    res.json({
        message: '200, GET SUCCESS',
        data: data
    })
}

const createNewUsers = (req, res) => {
    res.json({
        message: 'CREATE NEW USER'
    })
}

module.exports = {
    getAllUsers,
    createNewUsers
}