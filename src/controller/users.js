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

const getByid = async (req, res) => {
  const { idUser } = req.params;
  try {
    const [data] = await todosModels.getByid(idUser);
    res.json({
      message: "GET DETAIL DATA SUCCESS",
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

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await todosModels.updateUser(body, idUser);
    res.json({
      message: "UPDATE USER SUCCESS",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await todosModels.deleteUser(idUser);
    res.json({
      message: "DELETE USER SUCCESS",
      data: null,
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
  updateUser,
  deleteUser,
  getByid,
};
