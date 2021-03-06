const express = require("express");

const router = express.Router(); //Permite crear rutas montables y desmontables para modularizar las rutas segun recursos
//Debemos cambiar el app.get por router y borrar el /producto 

//Importarmos el controlador de las rutas
const productoController = require("../controllers/productoController.js")

router.get("/", productoController.listado);

/* router.get("/:idProducto", function (req, res) {
    res.send("Bienvenido al detalle del producto " + req.params.idProducto);
});

router.get("/:idProducto/comentario/:idComentario?", function (req, res) {
    if (req.params.idComentario == undefined) {
        res.send("Bienvenido a los comentarios del producto " + req.params.idProducto);
    } else {
        res.send("Bienvenido a los comentarios del producto " + req.params.idProducto + " y estas enfocado en el comentario " + req.params.idComentario);
    }
}); */

module.exports = router;
