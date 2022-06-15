const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController")
const {body, check} = require("express-validator")


router.get("/", controller.index);
router.post("/", [ 
    check("name").isLength({min:1}).withMessage("Debe ingresar un nombre"),
    check("email").isEmail().withMessage("Ingrese un email valido"),
    check("color").isLength({min:1}).withMessage("Debe seleccionar un color"),
    body("age").custom(value => {
        if(isNaN(value)) {
            throw new Error("El valor ingresado debe ser un numero");
        }
        else{
            return true
        }
    })
],controller.store);


module.exports = router;