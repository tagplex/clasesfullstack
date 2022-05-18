const express = require("express");
const app = express();

const rutasMain = require("./routes/mainRoutes.js")

app.use(express.static("public"))

app.listen(3030, ()=>{
    console.log("Servidor: http://localhost:3030");
})

app.use("/", rutasMain);