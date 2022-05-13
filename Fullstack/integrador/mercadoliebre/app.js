const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"))

app.listen(3000, (req, res) => {
    console.log("Servidor corriendo");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor funcionando");
})

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.post("/", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})