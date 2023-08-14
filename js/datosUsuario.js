
let nick;

// Esta funcion recibe el nick del usuario y lo almacena de manera temporal, usando un formato de clave valor para almacenarlo.
// Con setItem guardamos ese valor y le pasamos dos parametros, la clave que recive y el valor.
function datosUsuario(nick){
    sessionStorage.setItem("nick", nick.value);
}

// En esta funcion estamos obteniendo el valor mediante su clave y almacenandola en una variable.
// getItem sirve para llamar valores previamente guardados mediante la clase que corresponda a dicho valor. 
function getDatosUsuario(){
    nick = sessionStorage.getItem("nick");
    console.log(nick);
}

// Esta fucion sirve para comprovar que la persona que este ingresando este logueada, si no lo esta crea un mensaje de error.
function comporacionDatosUsuario(){
    if(nick == null){
        // Creamos la sessionStorage del error.
        sessionStorage.setItem("error", "No se ha iniciado una sesion");
        return false;
    }
    return true;
}