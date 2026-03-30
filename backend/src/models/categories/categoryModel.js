const { pool: poolmysql } = require('../../config/database');

const getAllCategories = async () => {
  const [rows] = await poolmysql.query('SELECT id, name FROM categories ORDER BY id ASC');
  return rows;
};

module.exports = {
  getAllCategories,
};
