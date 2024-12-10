//Para crear funciones en JS utilizamos la palabra function, a diferencia que en Java
//no necesitamos decir si la función devuelve algo o no aunque puede o no hacerlo
//SINTAXIS-> function nombreFuncion(parametro1, parametro2...). Podría no tener parámetros
//Esta funció o cualquier otra NO SE EJECUTARÁ hasta que sea llamada
function sumaNumeros(s1,s2){
    var resultado=s1+s2;
    alert(resultado);
}

function multiplicaNumeros(n1,n2){
    return n1*n2;
}

function sumaNumerosArray(elArray){
    var resultado=0;
    for(var x=0; x<elArray.length;x++){
        resultado=resultado+elArray[x];
    }
    alert(resultado);
}



/*sumaNumeros(3,5);
sumaNumeros(2,4);
var n1=9;
var n2=12;
sumaNumeros(n1,n2);
var s1=prompt("Introduce el s1")
var s2=prompt("Introduce el s2")
//parseInt() convierte la cadena de caracteres pasada por parámetro en un numero entero
sumaNumeros(parseInt(s1),parseInt(s2));
sumaNumeros(s1,s2);
var resultado=multiplicaNumeros(n1,n2);
alert(resultado);*/

function cambiaArray(otroArray){
    otroArray[0]=15;
}

function cambiaVariable(variable){
    variable=3;
}

/*unArray=[2,4,6,8,5,25];
cambiaArray(unArray);
alert(unArray);
*/
var num=2;
cambiaVariable(num);
alert(num);
