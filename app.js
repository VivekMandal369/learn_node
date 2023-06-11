const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./routes/routes');
// dotenv.config();
const PORT = process.env.PORT;

// DB connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
  console.log(`DB Connection Error: ${err.message}`);
});

// app.use(morgan("dev"));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});