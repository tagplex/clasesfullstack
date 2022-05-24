const express = require("express");
const app = express();

const rutasMain = require("./routes/mainRoutes.js");
const rutasDetail = require("./routes/detalleRoutes.js");

app.use(express.static("public"))

app.set("view engine", "ejs");

app.set("views", __dirname + "/views")


app.listen(3030, ()=>{
    console.log("Servidor: http://localhost:3030");
})

app.use("/", rutasMain);

app.use("/detalle", rutasDetail);
