
// Esta funcion recibe el nick del usuario y lo almacena de manera temporal, usando un formato de clave valor para almacenarlo.
// Con setItem guardamos ese valor y le pasamos dos parametros, la clave que recive y el valor.
function datosUsuario(nick){
    sessionStorage.setItem("nick", nick.value);
}

// En esta funcion estamos obteniendo el valor mediante su clave y almacenandola en una variable.
// getItem sirve para llamar valores previamente guardados mediante la clase que corresponda a dicho valor. 
function mostrarDatosUsuario(){
    let nick = sessionStorage.getItem("nick");
    console.log(nick);
}