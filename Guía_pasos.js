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


router.post("/", upload.single("nombredevariabledeform"),controaladorEjemplo.ejemplo);

*/