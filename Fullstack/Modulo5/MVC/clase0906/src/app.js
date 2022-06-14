const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cookies = require("cookie-parser");
const mainRoute = require("./routes/main");

app.use(cookies())
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3001, function() {
    console.log("Servidor corriendo");
})


app.use("/", mainRoute);