const genresController = {
    'list': (req, res) => {
        // Do the magic
        res.send("Listado de generos")
    },
    'detail': (req, res) => {
        // Do the magic
        res.send("Detalle del genero con id " + req.params.id)
    }

}

module.exports = genresController;