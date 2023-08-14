//Inicializacion de variables, objetos, DOM
const nickInput = document.querySelector('#nick');
const tamanoInput = document.querySelector('#tamano');
const formEntrada = document.querySelector('#formEntrada');
const error = document.querySelector('#error');

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
    datosUsuario(nickInput);
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);