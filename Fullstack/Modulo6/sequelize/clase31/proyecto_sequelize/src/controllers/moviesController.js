const db = require("../database/models");

const moviesController = {
    'list': (req, res) => {
        db.movies.findAll()
        .then(function(respuesta){
            res.send(respuesta)
        })
        .catch(function(error){
            res.send(error)
        })
    },
    'detail': (req, res) => {
        // Do the magic
        res.send("Detalle de la pelicula con id " + req.params.id)
    },
    'new': (req, res) => {
        // Do the magic
        res.send("Peliculas nuevas")
    },
    'recomended': (req, res) => {
        // Do the magic
        res.send("Peliculas recomendadas")
    }
}

module.exports = moviesController;