const express = require("express");

const app = express();
const rutasProductos = require("./routes/productos.js");
const rutasMain = require("./routes/main.js")

app.listen(3000, (req, res) => {
    console.log("Corriendo en http://localhost:3000");
});

app.use("/", rutasMain);
app.use("/productos", rutasProductos);

/* const serie = [
    {
        id: 0,
        nombre: "GOT"
    },
    {
        id: 1,
        nombre: "SUITS"
    },
    {
        id: 2,
        nombre: "BREAKING BAD"
    }
]



app.get('/serie/:idSerie', function (req, res) {
    if (serie[req.params.idSerie] ){
        res.send("No existe")
    } else {
        res.send(serie[req.params.idSerie])
  
    }
}) */