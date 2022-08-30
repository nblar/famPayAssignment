const express = require('express'); //import express

const router  = express.Router(); 

const helloController = require('../controllers/helloController');
router.get('/', helloController.dummyResponse);

module.exports= router;
