var cadena1 = "Hola";
alert("La longitud de la cadena es: " + cadena1.length);

var cadena2 = "Juan" + cadena1;
alert(cadena2);

var cadena3 = cadena1.concat(cadena2);
alert(cadena3);

var cadena4 = "sisisi";
cadena4.toUpperCase();

cadena2.toLowerCase();

alert(cadena4.charAt(2));

if (cadena4.indexOf("s") == 1){
    alert("Si está");
}else{
    alert("No está");
}

cadena4.lastIndexOf("s");

cadena4.substring(2);

cadena4.split("s");
