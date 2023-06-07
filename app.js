const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
// dotenv.config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});