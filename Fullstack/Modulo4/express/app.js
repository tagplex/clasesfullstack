let express = require("express");

let app = express();

app.listen(3000, () => console.log("Servidor corriendo"));

app.get("/contacto", function(req, res){
    res.send("Bienvenidos al servidor de express, seccion de contacto")
})

