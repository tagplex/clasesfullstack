const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController.js');
const adminMiddleware = require('../middleware/admin')
/* Estas son las rutas que este enrutador puede responder. Por cada ruta se requiere una */
router.get('/', mainController.index);
router.get("/admin", adminMiddleware, mainController.admin)

module.exports = router;

