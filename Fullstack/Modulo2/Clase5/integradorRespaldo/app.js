const tareas = require('./funcionesDeTareas');
let accion = process.argv[2];
        switch (accion) {
        case "listar":
            tareas.listar();
            break; 
        case "escribir":
            tareas.escribir();
            break;
        case "filtrar":
            tareas.filtrar();
            break;
        case undefined: 
            console.log("Atencion, tienes que pasar una acción"); 
            break;
        default:
            console.log("No entiendo qué quieres hacer");
            break;
    } 

                                  