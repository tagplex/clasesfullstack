const moviesController = {
    'list': (req, res) => {
        // Do the magic
        res.send("Listado de peliculas")
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