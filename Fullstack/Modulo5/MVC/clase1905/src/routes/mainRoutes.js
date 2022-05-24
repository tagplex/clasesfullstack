const express = require("express");
const mainController = require("../controllers/mainController.js");
const detalleController = require("../controllers/detalleController.js");
const router = express.Router();


router.get("/", mainController.index);

module.exports = router;