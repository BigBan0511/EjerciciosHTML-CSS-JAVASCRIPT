//Con la palabra var defino variables, a diferencia de Java no necesito decir que tipo
//de dato quiero almacenar en ellas, puedo guardar cualquier cosa
var num1=7;
var num2=2;
//Podemos generar variables sin usar var
//++ incrementa en uno el valor de la variable y el + suma un nº con otro
num3=num1++ + num2;
alert("El resultado de esta operación es: " + num3);
alert("Des pues de la suma num1 vale: " + num1);
//Lo que ha pasado es que primero se realiza la suma, se guarda en num3 y después de 
//hacer esa suma se incrementa el valor de num1

//Si colocamos el incremento delante, se ejecuta antes el incremento
num4=2;
num5=4;
num6=++num4+num5;
alert("El valor de num6 es: " + num6);
//Vamos a comparar numeros
num7=2;
num8="2";
alert("El doble igual compara solo el valor 'absoluto' de las variables sin importar el tipo de dato: " + (num7==num8));
alert("Con el triple igual además del valor comprobamos si son de la misma naturaleza, en este caso: " + (num7===num8));