//Inicializacion de variables, objetos, DOM
const nickInput = document.querySelector('#nick');
const tamanoInput = document.querySelector('#tamano');
const formEntrada = document.querySelector('#formEntrada');
const error = document.querySelector('#error');

// Este condicional se encarga de mostrar el error en caso de que el usuario intente acceder a una pagina a la que no tiene acceso.
if(sessionStorage.getItem("error") != null){
    // Tomamos el error del sessionStorage y lo mostramos en el contenedor del error.
    error.innerText = sessionStorage.getItem("error");
    // Removemos el error de la sessionStorage para que no siga apareciendo.
    sessionStorage.removeItem("error");
}

//Funciones de evento 
function comprobarForm(event){
    //Comprobar cambios
    if (nickInput.value.match(/(?<!\S)[0-9]/))
    {
        console.log("No hay Nick");
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo de nick no puede empezar con un numero";
        return false;
    } else if (tamanoInput.value == "0")
    {
        console.log("No se ha seleccionado el tamano del panel");
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = "El campo de tamaño del juego no puede estar vacio";
        return false;
    }
    // Le pasamos el nick a la fucion para crear la sessionStorage del usuario.
    datosUsuario(nickInput);
    historicoUsuario(nickInput);
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);