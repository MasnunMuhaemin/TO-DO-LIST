const pool = require("../config/database");

const getAllUsers = async () => {
  const SQLQuerry = "SELECT * from todos";

  return await pool.execute(SQLQuerry);
};

module.exports = {
  getAllUsers,
};
