function informaClick(){
    alert("Hemos hecho click");
}

function dobleClick(){
    alert("Has hecho doble click");
}

function sacarMouse(){
    var losH1DelDocumento = document.getElementsByTagName("h1");
    losH1DelDocumento[0].style.color = "green";
}

window.onload = function () {
    //Cuando asociamos funciones a eventos no ponemos los parentesis en la llamada al evento
    document.getElementById("manejador").onclick=informaClick;
    document.getElementById("manejador").ondblclick = dobleClick;
    document.getElementById("manejador").onmouseout = sacarMouse;
};