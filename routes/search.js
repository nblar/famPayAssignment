
//api routing 
const express = require('express'); //import express

const router  = express.Router(); 

const searchController= require('../controllers/searchController');
router.get('/', searchController.searchParameter);

module.exports= router;