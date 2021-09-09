//load express module
const express = require('express');
const cors = require('cors');

//install app object, with in built methods
const app = express();
app.use(express.json())
app.use(cors());

const searchRoutes = require('./controllers/google');
app.use('/search', searchRoutes)


module.exports = app;