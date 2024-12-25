const express = require("express");
const userController = require("../controller/users");
const route = express.Router();

// CREATE - POST TODOS
route.post("/", userController.createNewUsers);

// READ - GET ALL TODOS
route.get("/", userController.getAllUsers);

// UPDATE - PATCH TODOS
// route.patch("/:idUser", userController.updateUser);

// Delete - DELETE TODOS
// route.delete("/:idUser", userController.deleteUser);

module.exports = route;
