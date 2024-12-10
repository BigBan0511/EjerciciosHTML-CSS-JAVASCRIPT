function añadeNodo(){
    //Guardamos el nuevo texto que tendrá nuestro documento
    var texto=prompt("Introduce un texto para ser un nuevo párrafo del documento");
    //PASO 1: Creamos una variable que represenatrá al párrafo, en este momento está vacía
    var nuevoParrafo=document.createElement("p");
    //PASO 2: Creamos la variable de tipo texto que contendrá el texto del String
    var nuevoTexto=document.createTextNode(texto);
    //PASO 3: Añadimos al nodo p el nodo de tipo texto
    nuevoParrafo.appendChild(nuevoTexto);
    alert(nuevoParrafo.innerHTML);
    //PASO 4: Añadimos el nuevo nodo de tipo "p" al body del documento
    document.body.appendChild(nuevoParrafo);
}

function añadeaDiv(){
    //Obtengo en div
    var elDiv=document.getElementById("otrosElementos");
    //Genero el párrafo
    var parrafo=document.createElement("p");
    //Genero el texto
    var texto=document.createTextNode("Estoy dentro del div");
    //Añado al nodo parrafo el nodo texto
    parrafo.appendChild(texto);
    //Añado el párrafo al div
    elDiv.appendChild(parrafo);
}

window.onload=function(){
    añadeNodo();
    añadeaDiv();
}