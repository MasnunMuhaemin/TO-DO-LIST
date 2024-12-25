const pool = require("../config/database");

const getAllUsers = async () => {
  const SQLQuerry = "SELECT * from todos";

  return await pool.execute(SQLQuerry);
};

const createNewUsers = (body) => {
  const SQLQuerry = `INSERT INTO todos (title, description, is_completed) 
                    VALUES ('${body.title}', '${body.description}', '${body.is_completed}')`;

  return pool.execute(SQLQuerry);
};

module.exports = {
  getAllUsers,
  createNewUsers,
};
