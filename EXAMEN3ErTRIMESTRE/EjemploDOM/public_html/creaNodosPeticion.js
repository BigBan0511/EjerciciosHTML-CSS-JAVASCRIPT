window.onload=function(){
    solicitaSeguir();
}

function solicitaSeguir(){
    do{
        añadeNodoPedido();
        var respuesta=prompt("¿Deseas introducir otro Nodo?");
    }while(respuesta.toUpperCase()==="SI");
    alert("Gracias por usar este Programa");
}

function añadeNodoPedido(){
    var elNodo=prompt("Introduce el nodo a añadir (debe ser p, h1 o h2):");
    if(elNodo!="p" && elNodo!="h1" && elNodo!="h2"){
        alert("Debes introducir un nodo válido y " + elNodo + " no lo es");
    }else{
        var nuevoElemento=document.createElement(elNodo);
        var elTexto=prompt("Introduce el texto que deseas que tenga el nodo");
        var nodoTexto=document.createTextNode(elTexto);
        nuevoElemento.appendChild(nodoTexto);
        document.body.appendChild(nuevoElemento);
    }
}