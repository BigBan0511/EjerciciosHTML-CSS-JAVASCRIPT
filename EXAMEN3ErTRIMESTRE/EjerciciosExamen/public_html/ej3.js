window.onload=function () {
    document.getElementById("1").onclick=ocultarPrimerEnlace("1");
};

function ocultarPrimerEnlace(id){
    var enlace = document.getElementById(id)
    var parrafo = document.getElementById("parrafo" + id);
    if(parrafo.style.display == "" || parrafo.style.display == "block"){
        parrafo.style.display = "none";
        enlace.innerHTML = "Mostrar Párrafo";
    }else{
        parrafo.style.display = "block";
        enlace.innerHTML = "Ocultar Párrafo";
    }
}