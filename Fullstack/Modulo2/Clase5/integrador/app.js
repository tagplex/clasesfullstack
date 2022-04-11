const acciones = require('./funcionesDeTareas');

let accion = process.argv[2];
let filtrar = process.argv[3];


        switch (accion) {
        case "listar":
            console.log("Listado de Tareas\n");
            let tareas = acciones.listar();
            //Imprime como un arreglo 
            //console.log(tareas); 
            tareas.forEach((valor, posicion) =>{     
            console.log("La tarea N° " + (posicion + 1)  + " es " + valor.tarea + " y su estado es " + valor.estado );  
            })
            break; 
        case "crear":
            //Recibimos el nombre de la tarea que se creara
            let titulo = process.argv[3];
            //Declaramamos el arreglo que recibira datos
            let tarea = {
                tarea: titulo,
                estado: 'NoIniciado'
            }

            acciones.guardarTarea(tarea);
            console.log("Nueva tarea registrada");
            console.log(tarea.titulo + " ==> " + tarea.estado);

            break;
        case "filtrar":
            console.log("Listado de tareas "+ filtrar + "\n");

            let filtradas = acciones.filtrar(filtrar);
            filtradas.forEach((tarea) =>{
                console.log(tarea.tarea);
            });
                console.log("\n");
            break;
        case undefined: 
            console.log("Atencion, tienes que pasar una acción"); 
            break;
        default:
            console.log("\nNo entiendo qué quieres hacer.\n \nLas acciones disponibles son listar, crear y filtrar\n");
            break;
    } 

                                  