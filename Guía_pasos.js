/******Iniciar Proyecto, primero instalar nodejs, git, vscode*******/
//npm init -y

/******Instalar dependencias*******/
//npm install express (Servidor)
//npm install nodemon (Ejecutar cambios sin terminar proceso)
//npm install ejs (Manejador de vistas)
//npm install method-override (Para manejar los metodos de put y delete)


/******En app.js requerir express y crear constante express en app*******/
//const express = require("express")
//const app = express();

/******Debemos hacer publica la carpeta publica*******/
//app.use(exprss.static("public"))

/******Debemos setear el view engine para tener archivos .ejs*******/
//app.set("view engine", "ejs");
//app.set("views", __dirname + "/views")

/******Iniciamos servidor*******/
//app.listen(3000, () => {
//  console.log("http://localhost:3000"):    
//})

/*****Para delete y put se configura *******/
//En app.js creamos const methodOverride = require("method-override");
//app.use(methodOverride("_method"));

/****Para delete y put en form se realiza la siguiente modificacion *****/
// En action queda form action="/ruta/__actualizar/?_method=PUT" method="POST"

/******Se requieren las routas base*******/
//const mainRouter = require('./routes/main');  Rutas main
//const productsRouter = require('./routes/products'); Rutas /products

/******Se ejecutan las rutas******/
//app.use('/', mainRouter);
//app.use('/products', productsRouter);

/******En archivos router se requiere express y router*******/
//const express = require('express');
//const router = express.Router();

/****** Requerimos el controller. Por lo tanto primero crear controlador********/
//const mainController = require('../controllers/mainController');

/******Con el verbo html segun corresponda, la ruta llamamos o solicitamos el controlador 
 y la opcion que respondera a esta solicitud, finalmenente exportamos el router para solicitarlo
 en el app.js*******/
//router.get('/', mainController.index); 
//router.post('/search', mainController.search);  
//module.exports = router;

/* Para editar, primero debemos hacer un pedido por get para que podamos obtener la información
y luego en el boton modificar enviar mediante put */

/*****Para procesar imagenes en js se usar multer *****/
//npm install multer
//Requerir en archivos donde se requiera con const multer = require("multer");
//En el formuilario luego del method, debemos registrar enctype="multipart/form-data"

/***Multer se implementa donde se va utilizar, por ejemplo en el archivo de rutas****/
//const multer = require("multer"); Recordar el valor de name del campo para cargar el archivo

/** Para indicar donde se almacena dentro del proyecto */
/* Debemos requerir path para indicar la ubicación const path = rqr("path") */
/* let storage = multer.diskStorege({
    destination: (req, file, cb) => 
    {
        cb(null, path.join(__dirname, "../public/img/groups"));
    },
    filename: (req, file, cb) => 
    {
        const newFilename = "group-" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
}) 

const upload = multer({storage o storage:storage})
//Procesamiento del formulario de creación
router.post("/", upload.single("nombredevariabledeform"),controller.store u otro);
*/
/* En el lado del controlador para manejar el archivo */
//Usamos req.file

/*********EXPRESS-VALIDATOR ****/
// Instalar con npm install express-validator
// EV se ejecuta primero en router, mediante un array y en el contrlador y el metodo especifico que ejecuta la ruta
//se require con const { body } = rqr("express-validator")
//const validaciones = [ body("nombredecampohtml").notEmpty(), body("otronamedehtml").notEmpty(), etc]
//Para pasar al contralador, se pasa la variable o arreglo que almacena la validación como middleware **Entre la ruta y el controlador**
//En el contralador, requerimos la funcion validadora que generamos en el archivo router
//se requiere **const { nombrevariable } = require("express-validator");
//En el controlador se guarda en una variable local
//storeUser: (req, res) => { let variable = validationReulst(req); }
//Los errores se envian como array hacia la vista, de esa forma los podemos recorrer error.array()

///sudo /opt/lampp/manager-linux-x64.run