const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./routes/routes');
// dotenv.config();
const PORT = process.env.PORT;

// app.use(morgan("dev"));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});