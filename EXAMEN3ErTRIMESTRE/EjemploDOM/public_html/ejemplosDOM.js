window.onload=function(){
    //Se ejecuta cuando el árbol de nodos está cargado
    alert("Página cargada");
    //Guarda en un array todos los elementos "p" del documento
    var parrafos=document.getElementsByTagName("p");
    //Guarda en un array todos los elementos "a" del documento
    var enlaces=document.getElementsByTagName("a");
    //Guarda en un array todos los elementos con name="parrafito"
    var parrafosPorName=document.getElementsByName("parrafito");
    //Guardamos en una VARIABLE (no array) la etiqueta que tenga id="lo que sea"
    var divPorId=document.getElementById("probando");
    for(var x=0; x<parrafos.length;x++){
        //Si lalmamos al atributo innerHTML puedo ver el contenido de los nodos a nvel html
        alert(parrafos[x].innerHTML);
    }
    alert("Mostrando enlaces:")
    for(var x=0; x<enlaces.length;x++){
        alert(enlaces[x].innerHTML);
    }
    alert("Mostrando el elemento con el nombre parrafito:")
    alert(parrafosPorName[0].innerHTML);
    alert(parrafosPorName[1].innerHTML);
    alert("Mostrando el elemento con id=probando" + divPorId.innerHTML);
};

