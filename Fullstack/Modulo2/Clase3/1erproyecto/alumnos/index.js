let alumno = [
    {
        Nombre: 'Kevin Palma',
        Pasatiempo: 'Jugar videojuegos', 
        Residencia: 'Chiloé, CL',
        saludar: function(){
            return "Hola, soy " + this.Nombre + ", disfruto " + this.Pasatiempo + " y soy de " + this.Residencia
        }
    },
    {
        Nombre: 'Benjamin Palma',
        Pasatiempo: 'Jugar videojuegos', 
        Residencia: 'Chiloé, Chile',
        saludar: function(){
            return "Hola, soy " + this.Nombre + ", disfruto " + this.Pasatiempo + " y soy de " + this.Residencia
        }
    },
        
];
module.exports = alumno;