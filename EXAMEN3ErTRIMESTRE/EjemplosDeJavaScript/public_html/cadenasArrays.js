/*//MÉTODOS DE LA CLASE STRING
var miCadena="Hola";
alert(miCadena.length); 
var otraCadena=miCadena+" Juan";
alert(otraCadena);
otraCadena=otraCadena.concat(" bienvenido a 1º DAW");
console.log(otraCadena.toUpperCase());
alert(otraCadena.charAt(3));
alert(otraCadena.lastIndexOf("A"));
//Si lo pongo solo con valor de inicio me devuelve el sbstr desde el valor inicial al final
alert(otraCadena.substring(5));
//COge el primer valor pero no el último, en este caso del 5 al 8
alert(otraCadena.substring(5,9));
//El método split, nos devuelve un array con tantos Strings como se encuentren en
//la cadena original usando el caracter separador
//cadena="Hola estoy en mi casa" -> SPLIT -> ["Hola", "estoy", "en", "mi", "casa"];
var miArrayDeCadenas=otraCadena.split("a");
alert(miArrayDeCadenas);
for(var x=0; x<miArrayDeCadenas.length;x++){
    console.log("Posición " + x + " del array: " + miArrayDeCadenas[x]);
}
//MÉTODOS DE LA CLASE ARRAY
var arrayDeNumeros=[1,2,3,4,5];
var otroArray=arrayDeNumeros.concat(miArrayDeCadenas);
alert(otroArray);
//Sca el último elemento y lo devuelve
alert(arrayDeNumeros.pop());
//Añade el elemento al final del array
arrayDeNumeros.push(9);
alert(arrayDeNumeros);
//Elimina el primer elemento del array y lo devuelve
alert(arrayDeNumeros.shift());
alert(arrayDeNumeros);
arrayDeNumeros.unshift("Hola");
alert(arrayDeNumeros);*/

var miArrayNum=[2,5,8,1,9,2];
miArrayNum.reverse();
alert(miArrayNum);
miArrayNum.sort();
alert(miArrayNum);



