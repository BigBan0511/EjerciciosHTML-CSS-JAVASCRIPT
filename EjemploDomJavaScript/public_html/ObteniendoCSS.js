window.onload = function(){
    var imagen = document.getElementById("laImagen");
    alert("Los atributos CSS de este elemento JavaScript son: " 
            + "\nMargin:" + imagen.style.margin
            + "\nBorder:" + imagen.style.border
            + "\nHeight:" + imagen.style.height
            + "\nWidth:" + imagen.style.width);
    imagen.style.height = "400px";
    imagen.style.width = "400px";
};