const express = require("express");
const app = express();
const path = require("path");

const mainRouter = require("./routes/mainRouter.js")
const apiMainRouter = require("./routes/api/apiMainRouter.js")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');


app.use("/", mainRouter);
app.use("/api", apiMainRouter);

app.listen(3031, () => {
    console.log("Servidor corriendo en http://localhost:3031")
});
