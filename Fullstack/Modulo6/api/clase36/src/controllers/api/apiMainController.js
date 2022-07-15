const mainController = {
    moviesList: (req, res) => {

        let peliculas = [
            "Dr. Strange",
            "Thor",
            "El monstruo marino",
            "La ciudad perdida",
            "Encanto"
        ]
        
        let respuesta = {
            meta: {
                status: 200,
                total: peliculas.length,
                url: 'api/movies'
            },
            data: peliculas
        }

        res.json(respuesta);
    },

    movie: (req, res) => {
        let peliculas = [
            "Dr. Strange",
            "Thor",
            "El monstruo marino",
            "La ciudad perdida",
            "Encanto"
        ]

        let pelicula = peliculas[req.params.id-1]

        let respuesta = {
            meta: {
                status: 200,
                url: 'api/movies/single/:id'
            },
            data: pelicula
        }

        res.json(respuesta);
    },

    addMovie: (req, res) => {

        // Código para hacer el guardado de la data del body
        console.log(req.body);

        let respuesta = {
            meta: {
                status: 200,
                url: 'api/movies/add'
            },
            msg: "Movie added"
        }
        res.json(respuesta);
    },

    duck: (req, res) => {
        let pato = {
            name: "Donald",
            age: null,
            funnyTalk: true,
            nephews: [
                {
                    name: "Dewey",
                    age: 10,
                    shirtColor: "Blue"
                },
                {
                    name: "Huey",
                    age: 12,
                    shirtColor: "Red"
                },
                {
                    name: "Louie",
                    age: 11,
                    shirtColor: "Green"
                }
            ]
        }

        let respuesta = {
            meta: {
                status : 200,
                url: 'api/duck'
            },
            data: pato
        }
        
        res.status(200).json(respuesta);
    }

    
}

module.exports = mainController;