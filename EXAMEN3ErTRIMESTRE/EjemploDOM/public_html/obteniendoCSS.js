window.onload=function(){
    //Podemos acceder a los elementos css de un nodo -> nombreNodo.style.NombreCss
    var imagen=document.getElementById("laImagen");
    alert("Los atributos CSS de este elemento son: " + 
            "\nMargin: " + imagen.style.margin + 
            "\nBorder: " + imagen.style.border +
            "\nheight: " + imagen.style.height +
            "\nwidth: " + imagen.style.width);
    //Podemos modificar desde JS los atributos de tipo style
    imagen.style.height="400px";
    imagen.style.width="400px";
}

