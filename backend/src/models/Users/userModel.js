const { pool: poolmysql } = require('../../config/database');

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  const values = [email];
  const [rows] = await poolmysql.query(query, values);
  return rows[0];
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const values = [id];
  const [rows] = await poolmysql.query(query, values);
  return rows[0];
};

const getAllUsers = async () => {
  const query = 'SELECT id, name, last_name, email, number, address, city, country, rol_id FROM users';
  const [rows] = await poolmysql.query(query);
  return rows;
};

const createUser = async ({
  name,
  email,
  password,
  last_name,
  number,
  address,
  city,
  country,
  rol_id,
}) => {
  const query =
    'INSERT INTO users (name, email, password, last_name, number, city, country, rol_id, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    name,
    email,
    password,
    last_name,
    number,
    city,
    country,
    rol_id,
    address,
  ];

  const [resp] = await poolmysql.query(query, values);
  return {
    id: resp.insertId,
    name,
    email,
    password,
    last_name,
    number,
    city,
    country,
    rol_id,
    address,
  };
};

const updateUser = ({
  id,
  name,
  email,
  password,
  last_name,
  number,
  city,
  country,
  rol_id,
  address,
}) => {
  const query =
    'UPDATE users SET name = ?, email = ?, password = ?, last_name = ?, number = ?, city = ?, country = ?, rol_id = ?, address = ? WHERE id = ?';

  return new Promise((resolve, reject) => {
    poolmysql.query(
      query,
      [name, email, password, last_name, number, city, country, rol_id, address, id],
      (err, result) => {
        if (err) {
          console.error('Error from userModel.js', { err });
          return reject(err);
        }
        resolve(result.affectedRows);
      }
    );
  });
};

const deleteUser = (userId) => {
  const query = 'DELETE FROM users WHERE id = ?';

  return new Promise((resolve, reject) => {
    poolmysql.query(query, [userId], (err, result) => {
      if (err) {
        console.error('Error from userModel.js', { err });
        return reject(err);
      }
      resolve(result.affectedRows);
    });
  });
};

module.exports = {
  getUserByEmail,
  updateUser,
  deleteUser,
  createUser,
  getUserById,
  getAllUsers,
};
