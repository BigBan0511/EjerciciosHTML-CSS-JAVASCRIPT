/*var alumnos = ["Pablo","Fernando","Chicote","Luigi"];

function mostrarNombres(miArray){
    for (var x = 0; x < miArray.length; x++) {
        alert(miArray[x]);
    }
}

mostrarNombres(alumnos);*/

/*var numElegido = prompt("Introduzca un numero entero para calcular su factorial");

function factorial(numero){
    var total = numero;
    var n = 1;
    while(n > 0 && n < numero){
        total = total * n;
        n++;
    }
    return total;
}

alert(factorial(numElegido));*/

/*var frase = prompt("Introduzca una frase");
var miArray = frase.split(" ");
alert("numero de palabras: " + miArray.length);
alert("Primera palabra: " + miArray[0]);
alert("Ultima palabra: " + miArray[miArray.length - 1]);
for (var x = miArray.length; x > 0; x--) {
    alert(miArray[x]);
}*/

/*var numero = prompt("Introduce un numero entero");
var miArray = [1,3,5,7,9];
for (var x = 0; x < miArray.length; x++) {
    if(miArray[x] == numero){
        alert("EL numero ya esta en el array");
        x = miArray.length;
    }else if (numero > 1 && numero < 9){
        miArray.splice(numero-1, 1, numero);
    }else if (numero < 1 || numero > 9){
        alert("El numero esta fuera del array");
        x = miArray.length;
    }
}*/