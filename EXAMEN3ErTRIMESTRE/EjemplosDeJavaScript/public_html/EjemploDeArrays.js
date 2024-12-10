var pruebaArray=[1,2,3,4];
alert("Vamos a mostrar los valores del array");
alert("El elemento  del array 0 es: " + pruebaArray[0]);
alert("El elemento  del array 1 es: " + pruebaArray[1]);
alert("El elemento  del array 2 es: " + pruebaArray[2]);
alert("El elemento  del array 3 es: " + pruebaArray[3]);
//Este alert me tirará undefined porque la posición 4 del array no tiene nada dentro
alert("El elemento  del array es 4: " + pruebaArray[4]);
//Ahora he llenado esa posición con un String y el siguiente alert me devolverá ese contenido.
pruebaArray[4]="Otro elemento";
alert("El elemento  del array es 4: " + pruebaArray[4]);

