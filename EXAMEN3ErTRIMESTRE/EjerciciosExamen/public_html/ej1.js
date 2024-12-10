window.onload=function () {
    alert("Hay " + cuentaEnlaces() + " enlaces en la pagina");
    var longitudArrayEnlaces = document.getElementsByTagName("a").length;
    alert("La direccion del penultimo enlace es: " 
            + document.getElementsByTagName("a")[longitudArrayEnlaces - 2]);
    alert("Hay " + cuentaEnlacesPrueba() + " enlaces en la pagina que llevan a prueba");
    
};

function cuentaEnlaces(){
    var contador = 0;
    for (var x = 0; x < document.getElementsByTagName("a").length; x++) {
        contador++;
    }
    return contador;
}

function cuentaEnlacesPrueba(){
    var contador = 0;
    var EnlacesPrueba = document.getElementsByTagName("a");
    for (var x = 0; x < EnlacesPrueba.length; x++) {
        if(EnlacesPrueba[x] == "http://prueba"){
            contador++;
        }
    }
    return contador;
}

function cuentaEnlacesParrafo(){
    var contador = 0;
    var parrafos = document.getElementsByTagName("p");
    var enlaces = document.getElementsByTagName("a");
    if(enlaces.parrafos[1])
}