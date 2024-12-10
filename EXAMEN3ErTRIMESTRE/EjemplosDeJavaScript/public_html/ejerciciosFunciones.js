function valorMasGrande(unArray){
    max=unArray[0];
    for(var x=0;x<unArray.length;x++){
        if(max<unArray[x])
            max=unArray[x];
    }return max;
}

function estasDeacerudo(nombre){
    return confirm("Tu nombre es: " + nombre + ". ¿Es correcto?");
}

/*
elArray=[4,5,9,12,1,4];
alert("El maximo del array es: " + valorMasGrande(elArray));*/
var salida=false;
while(salida===false){
    var nombre=prompt("¿Cuál es tu nombre?");
    salida=estasDeacerudo(nombre);
}