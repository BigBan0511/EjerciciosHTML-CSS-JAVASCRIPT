/*function sumaNumeros(s1,s2){
    var resutlado = s1 + s2;
    alert(resultado);
}

sumaNumeros(3,5);*/

var numero = prompt("Introduce un número entero");
var resultado = parImpar(numero);
alert("El numero "+numero+" es "+resultado);

function parImpar(numero){
    if(numero % 2 == 0){
        return "par";
    }else{
        return "impar";
    }
}

function creaMensaje(){
    mensaje = "Mensaje de prueba";
}
creaMensaje();
alert(mensaje);

var miArray = [5,9,77,33];

function sumaNumArray(array){
    var res = array;
    var resul = 0;
    for (var x = 0; x < array.length; x++) {
        resul = resul + array[x];
    }
    return resul;
}

resultado = sumaNumArray(miArray);
alert(resultado);

function numMayor(miArray){
    var guardaNum = miArray[0];
    for (var x = 1; x < miArray.length; x++) {
        if(miArray[x] > guardaNum){
            guardaNum = miArray[x];
        }
    }
    return guardaNum;
}

var unArray = [2,1,9,55,3];
alert("El numero mas grande del array es " + numMayor(unArray));

function estasDeacuerdo(nombre){
    return confirm("Tu nombre es: " + nombre)
}

var salida = false;
while(salida==false){
    var nombre = prompt("Cual es tu nombre?");
    salida = estasDeacuerdo(nombre);
}