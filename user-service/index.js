const express = require('express');
const { pool, initDB } = require('./db');
const app = express();
const PORT = 3001;

app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

app.listen(PORT, async () => {
  await initDB();
  console.log(`User service running on port ${PORT}`);
});
