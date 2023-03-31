//Inicializacion de variables, objetos, DOM
const nickInput = document.querySelector('#nick');
const tamanoInput = document.querySelector('#tamano');
const formEntrada = document.querySelector('#formEntrada');

//Funciones de evento 
function comprobarForm(event){
    //Comprobar cambios
    if (nickInput.value.length == 0)
    {
        console.log("No hay Nick");
        nickInput.focus();
        event.preventDefault();
        return false;
    } else if (tamanoInput.value == "0")
    {
        console.log("No se ha seleccionado el tamano del panel");
        tamanoInput.focus();
        event.preventDefault();
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);