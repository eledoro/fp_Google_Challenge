const express = require('express');
const router = express.Router();

const SearchResult = require('../models/google')

router.get('/search', (req, res) => {
    const  searchData = SearchResult.all;
    res.send(searchData);
});

router.get('/i_ am_feeling_lucky', (req, res) => {
    
})