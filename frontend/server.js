const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
  try {
    const [userRes, productRes] = await Promise.all([
      axios.get('http://user-service:3001/users'),
      axios.get('http://product-service:3002/products'),
    ]);

    const users = userRes.data;
    const products = productRes.data;

    res.send(`
      <html>
        <head><title>Microservice Demo</title></head>
        <body>
          <h1>Microservices Demo</h1>
          
          <h2>Users</h2>
          <ul>
            ${users.map(u => `<li>${u.id}: ${u.name}</li>`).join('')}
          </ul>

          <h2>Products</h2>
          <ul>
            ${products.map(p => `<li>${p.id}: ${p.name}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err.message);
    res.send("Error connecting to microservices.");
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
