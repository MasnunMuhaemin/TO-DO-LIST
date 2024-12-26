const pool = require("../config/database");

const getAllUsers = async () => {
  const SQLQuerry = "SELECT * from todos";

  return await pool.execute(SQLQuerry);
};

const getByid = (idUser) => {
  const SQLQuerry = `SELECT * FROM todos WHERE id=${idUser}`;

  return pool.execute(SQLQuerry);
};

const createNewUsers = (body) => {
  const SQLQuerry = `INSERT INTO todos (title, description, is_completed) 
                    VALUES ('${body.title}', '${body.description}', '${body.is_completed}')`;

  return pool.execute(SQLQuerry);
};

const updateUser = (body, idUser) => {
  const SQLQuerry = `UPDATE todos SET title='${body.title}', description='${body.description}', is_completed='${body.is_completed}' WHERE id='${idUser}'`;

  return pool.execute(SQLQuerry);
};

const deleteUser = (idUser) => {
  const SQLQuerry = `DELETE FROM todos WHERE id=${idUser}`;

  return pool.execute(SQLQuerry);
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
  getByid,
};
