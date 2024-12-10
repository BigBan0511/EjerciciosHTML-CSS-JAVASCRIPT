/*window.onload = function(){
    //Se ejecuta cuando el arbol de nodos esta cargado
    alert("Pagina cargada");
    var parrafos = document.getElementsByTagName("p");
    for (var x = 0; x < parrafos.length; x++) {
        alert(parrafos[x].innerHTML);
    }
}*/


/*window.onload = function(){
    añadeNodo();
};

function añadeNodo(){
    var texto = prompt("Introduce un texto para ser un nuevo parrafo del documento");
    var nuevoParrafo = document.createElement("p");
    var nuevoTexto = document.createTextNode(texto);
    nuevoParrafo.appendChild(nuevoTexto);
    alert(nuevoParrafo.innerHTML);
    document.body.appendChild(nuevoParrafo);
}

function añadeDiv(){
    var elDiv = document.getElementById("otroElemento");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Estoy dentro del div");
    parrafo.appendChild(texto);
    elDiv.appendChild(parrafo);
}*/

/*window.onload = function(){
    eliminaNodo();
};

function eliminaNodo(){
    var parrafo = document.getElementById("elParrafo");
    parrafo.parentNode.removeChild(parrafo);
}

function eliminaParrafoPorNumero(elNumero){
    var losParrafos = document.getElementsByTagName("p");
    if(elNumero<0 || elNumero>=losParrafos.length){
        alert("El numero no se corresponde con ningun parrafo");
    }else{
        var elParrafo = losParrafos[elNumero];
        elParrafo.parentNode.removeChild(elParrafo);
    }
}*/

window.onload = function(){
    var enlace = document.getElementById("elEnlace");
    alert("El enlace de esta pagina es: " +enlace.href);
    alert("El id de este elemento es: " + enlace.id);
};

