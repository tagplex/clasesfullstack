const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Home funcionando")
});
router.get("/contacto", function (req, res) {
    res.send("Deja tu contacto");
});

module.exports = router;