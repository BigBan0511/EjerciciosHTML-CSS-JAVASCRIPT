/*window.onload = function(){
    do{
        añadePene();
    }while(solicitaSeguir() === true);
};

function solicitaSeguir(){
    var respuesta = prompt("Desea seguir?");
    if(respuesta.toUpperCase()==="SI"){
        return true;
    }else{
        return false;
    }
}

function añadePene(){
    var eleccion = prompt("De que desea hacer el texto? h1, p, h2");
    var valido = false;
    var texto = "";
    do{
        switch (eleccion) {
            case "h1":
                var nuevoParrafo = document.createElement("h1");
                texto = prompt("Introduzca el texto con etiqueta h1");
                var nuevoTexto = document.createTextNode(texto);
                nuevoParrafo.appendChild(nuevoTexto);
                document.body.appendChild(nuevoParrafo);
                valido = true;
                break;
            case "p":
                var nuevoParrafo = document.createElement("p");
                texto = prompt("Introduzca el texto con etiqueta p");
                var nuevoTexto = document.createTextNode(texto);
                nuevoParrafo.appendChild(nuevoTexto);
                document.body.appendChild(nuevoParrafo);
                valido = true;
                break;
            case "h2":
                var nuevoParrafo = document.createElement("h2");
                texto = prompt("Introduzca el texto con etiqueta h2");
                var nuevoTexto = document.createTextNode(texto);
                nuevoParrafo.appendChild(nuevoTexto);
                document.body.appendChild(nuevoParrafo);
                valido = true;
                break;
            default:
                alert("Esa opcion no existe, elija de nuevo");
                break;
        }
    }while(valido === false);
}*/

window.onload = function(){
    eliminaNodoEleccion();
};

function eliminaNodoEleccion(){
    var eleccion = prompt("Que desea eliminar? h1, h2 o p");
    switch (eleccion) {
        case "h1":
            var elNumero = prompt("Cual de los elementos que quiere elegir va a eliminar?");
            elNumero = elNumero - 1;
            var losParrafos = document.getElementsByTagName("h1");
            if(elNumero<0 || elNumero>=losParrafos.length){
                alert("El numero no se corresponde con ningun parrafo");
            }else{
                var elParrafo = losParrafos[elNumero];
                elParrafo.parentNode.removeChild(elParrafo);
            }
            valido = true;
            break;
        case "p":
            var elNumero = prompt("Cual de los elementos que quiere elegir va a eliminar?");
            elNumero = elNumero - 1;
            var losParrafos = document.getElementsByTagName("p");
            if(elNumero<0 || elNumero>=losParrafos.length){
                alert("El numero no se corresponde con ningun parrafo");
            }else{
                var elParrafo = losParrafos[elNumero];
                elParrafo.parentNode.removeChild(elParrafo);
            }
            valido = true;
            break;
        case "h2":
            var elNumero = prompt("Cual de los elementos que quiere elegir va a eliminar?");
            elNumero = elNumero - 1;
            var losParrafos = document.getElementsByTagName("h2");
            if(elNumero<0 || elNumero>=losParrafos.length){
                alert("El numero no se corresponde con ningun parrafo");
            }else{
                var elParrafo = losParrafos[elNumero];
                elParrafo.parentNode.removeChild(elParrafo);
            }
            valido = true;
            break;
        default:
            alert("Esa opcion no existe, elija de nuevo");
            break;
    }
}