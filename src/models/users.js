const pool = require("../config/database");

const getAllUsers = async () => {
  const SQLQuerry = "SELECT * from todos";

  return await pool.execute(SQLQuerry);
};

const createNewUsers = (body) => {
  const SQLQuerry = `INSERT INTO todos (tittle, description) VALUES ('${body.tittle}', '${body.description}')`;

  return pool.execute(SQLQuerry);
};

module.exports = {
  getAllUsers,
  createNewUsers,
};
