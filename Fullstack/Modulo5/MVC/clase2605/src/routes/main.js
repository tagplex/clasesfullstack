// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* Quiten el comentario y editen según el enunciado */

router.get('/', mainController.index); 
router.post('/search', mainController.search);  



module.exports = router;
