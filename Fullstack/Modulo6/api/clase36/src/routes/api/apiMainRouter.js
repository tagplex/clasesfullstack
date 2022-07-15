const express = require("express");
const router = express.Router();

const apiMainController = require("../../controllers/api/apiMainController.js")

router.get("/movies", apiMainController.moviesList);
router.post("/movies/add", apiMainController.addMovie);
router.get("/movies/single/:id", apiMainController.movie);
router.get("/duck", apiMainController.duck);


module.exports = router;