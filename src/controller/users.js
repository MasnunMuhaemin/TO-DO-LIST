const todosModels = require("../models/users");
const getAllUsers = async (req, res) => {
  try {
    const [data] = await todosModels.getAllUsers();
    res.json({
      message: "GET ALL DATA SUCCESS",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;
  console.log(body)
  try {
    await todosModels.createNewUsers(body);
    res.json({
      message: "CREATE NEW DATA SUCCESS",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
};
