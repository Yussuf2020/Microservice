const { Pool } = require('pg');

const pool = new Pool({
  host: 'postgres',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'microdemo',
});

async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    )
  `);
  await pool.query(`INSERT INTO users (name) VALUES ('Alice'), ('Bob') ON CONFLICT DO NOTHING`);
}

module.exports = { pool, initDB };
