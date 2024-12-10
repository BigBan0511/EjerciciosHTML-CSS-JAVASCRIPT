function informaClick(){
    alert("Has hecho click");
    document.getElementsByTagName("h1")[0].style.color="red";
}

function sacaMouse(){
    //alert("Has sacado el mouse del botón");
    //Esto me da un array de elementos h1
    /*var losH1DelDocumento=document.getElementsByTagName("h1");
    losH1DelDocumento[0].style.color="green";*/
    document.getElementsByTagName("h1")[0].style.color="green";
}

function pintaRojo(){
    document.getElementsByTagName("h2")[0].style.color="red";
}

window.onload=function(){
    //Podemos poner nuestro manejador de eventos en esta parte del código
    //Cuando asociamos funciones a eventos no ponemos los paréntesis en la llamada al evento
    document.getElementById("manejador").onclick=informaClick;
    document.getElementById("manejador").onmouseover=pintaRojo;
    document.getElementById("manejador").onmouseout=sacaMouse;
}
