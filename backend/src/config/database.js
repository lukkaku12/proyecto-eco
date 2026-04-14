const { createPool } = require('mysql2/promise');

const pool = createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DBNAME,
  charset: 'utf8mb4',
});

module.exports = { pool };
