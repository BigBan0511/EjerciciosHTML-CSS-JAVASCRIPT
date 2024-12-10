window.onload=function(){
    eliminaNodoEleccion();
}

function eliminaNodo(){
    //Primero obtenemos el elemento
    var parrafo=document.getElementById("elParrafo");
    //Accedemos al padre del elemento con su atributo .parentNode y
    //después llamamos al método removeChild(elNodo hijo)
    parrafo.parentNode.removeChild(parrafo);
}

//Esta función elimina del arbnol de nodos el nodo p que corresponde al
//nº pasado por parámetro
function eliminaParrafoPorNumero(elNumero){
    //PASO 1: Obtener el array de párrafos
    var losParrafos=document.getElementsByTagName("p");
    //PASO 2: Compruebo que ese nº se corresponde con un párrafo.
    if(elNumero<0 || elNumero>=losParrafos.length){
        alert("El nº no se corresponde con ningún párrafo");
    }else{
        //Obtengo el párrafo que me interesa eliminar
        var elParrafo=losParrafos[elNumero];
        elParrafo.parentNode.removeChild(elParrafo);
        //losParrafos[elNumero].parentNode.removeChild(losParrafos[elNumero]);
    }
}

function eliminaNodoEleccion(){
    //PASO 1: Preguntar qué deseo eliminar
    var tipoNodo=prompt("Introduce el nodo a eliminar:");
    //PASO 2: Compruebo si es una de las posibilidades (h1, h2 p)
    if(tipoNodo=="h1" || tipoNodo=="h2" || tipoNodo=="p"){
        //PASO 3: Obtrengo el array de nodos de ese elemento
        var losNodos=document.getElementsByTagName(tipoNodo);
        //PASO 4: Preguntar el contenido
        var contenido=prompt("Introduce el contenido del nodo a eliminar:");
        //PASO 5: Recorrer el array de p, h1, h2 buscando el contenido
        for(var x=0; x<losNodos.length;x++){
            if(losNodos[x].innerHTML==contenido){
                //PASO 6: Si lo encuentro, elimino el nodo
                losNodos[x].parentNode.removeChild(losNodos[x]);
            }
        }
    }else{
        alert("El tipo de nodo no coincide con las opciones");
    }
}