function addNodo(){
    var listaa = document.getElementById("lista");
    var nuevoNodo = document.createElement("li");
    var elTexto = "Elemento nuevo de la lista";
    var nodoTexto=document.createTextNode(elTexto);
    nuevoNodo.appendChild(nodoTexto);
    listaa.appendChild(nuevoNodo);
}