const express = require("express");
const path = require("path");

//Ejecutacion express
const app = express();

//Declaramos funcion para acceder a public con archivos estaticos
const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath));

app.listen(3030, (req, res) => {
    console.log("Servidor corriendo en http://localhost:3030");
});

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})