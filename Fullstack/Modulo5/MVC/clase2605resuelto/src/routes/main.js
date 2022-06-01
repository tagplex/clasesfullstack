// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
/* Estas son las rutas que este enrutador puede responder. Por cada ruta se requiere una */
router.get('/', mainController.index);
router.get('/search', mainController.search); 

module.exports = router;
