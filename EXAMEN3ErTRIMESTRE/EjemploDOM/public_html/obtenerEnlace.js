window.onload=function(){
    //Podemos acceder a los atributos de un nodo obtenido del DOM directamente como
    //si fuesen atributos públicos de ese nodo-> nombreNodo.nombreAtributo
    //PASO 1: Obtenemos el nodo tipo a, en este caso mediante su ID
    var enlace=document.getElementById("elEnlace");
    alert("El enlace de esta página es: " + enlace.href);
    //También podemos acceder al id de el elemento
    alert("El id de este elemento es: " + enlace.id);
}
