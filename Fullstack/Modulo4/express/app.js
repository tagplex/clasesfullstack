let express = require("express");

let app = express();

app.listen(3000, () => console.log("Servidor corriendo"));

app.get("/", function(req, res){
    res.send("Bienvenidos al servidor de express")
})

