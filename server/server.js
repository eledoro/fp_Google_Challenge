//load express module
const express = require('express');
const cors = require('cors');

//install app object, with in built methods
const app = express();
app.use(express.json())
app.use(cors());




module.exports = app;