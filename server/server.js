//load express module
const express = require('express');
const cors = require('cors');

//install app object, with in built methods
const app = express();
app.use(express.json())
app.use(cors());

app.get('/search', (req, res) => {
    const getall = JSON.stringify(searchData);
    res.send(getall)
})

const searchData = require('./data')

function getRandomQuote () {
    let quoteNumber = Math.floor(Math.random()*searchData.length)
    return searchData[quoteNumber]
  }
  
app.get('/lucky', (req, res) => {
    res.send(getRandomQuote())
});


module.exports = app;