const express = require("express");
const detalleController = require("../controllers/detalleController.js");
const router = express.Router();

router.get("/detalle", detalleController.detalle);
router.get("/:id", detalleController.detalle);

module.exports = router;