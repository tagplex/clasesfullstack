const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"))

app.listen(3000, (req, res) => {
    console.log("Servidor corriendo en http://localhost:3000");
});

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})