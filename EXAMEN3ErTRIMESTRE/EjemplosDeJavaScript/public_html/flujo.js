/*var precio=50;
precio=200;
//Para hacer if/else usamos la misma estructura que en Java
if(precio>=100){
    alert("El precio es caro");
}else{
    alert("El precio es barato");
}

//Parea comparar cadenas podemos usar ==
var nombre="Alex";
var nombre2="Alex";
if(nombre==nombre2){
    alert("Es el mismo nombre");
}else{
    alert("Son nombres distintos");
}

//Podemos poner varios if/else if
nota=5;
if(nota<0 || nota>10){
    alert("Nota no válida");
}else if(nota<5){
    alert("Suspenso");
}else if(nota<6){
    alert("Suficiente");
    nota=9;
}else if(nota<9){
    alert("Notable");
}else if(nota<=10){
    alert("Sobresaliente");
}

if(nota<=10){
    alert("Sobresaliente");
}


//Los bucles son iguales que en Java
var mensaje="Esta es la pasada nº: ";
for(x=0;x<3;x++){
    alert(mensaje+x);
}

//nombreArray.length nos devolverá el tam del array en cuestión
var unArray=["perro", "gato", "serpiente", "pato"];
for(x=0; x<=unArray.length;x++){
    console.log("En elemento " + x + " del array es " + unArray[x]);
}*/

/*meses=["Enero", "Febrero", "Marzo", "Abril"];
//En este caso el for in me da los índices del bucle
for(actual in meses){
    alert(meses[actual]);
}

//Con el while el bucle se ejecuta mientas se cumpla la condición PERO podría no
//ejecutarse nunca, porque el while primero comprueba condición y luego ejecuta
//CUIDADO PORQUE PODEMOS ENTRAR EN BUCLES INFINITOS
var ciclo="DAW"
while(ciclo=="DAW"){
    alert("Estas estudiando el " + ciclo);
        //La función prompt nos solicita información mediante un mensaje
        ciclo=prompt("Introduce en que ciclo estás estudiando: ");
    }

*/

//El do while ejecuta al menos una vez el bucle, primero ejecuta y luego comprueba
//la condición
/*do{
    var curso=prompt("Introduce tu curso")
    alert("Estas estudiando el curso " + curso);
}while(curso==1);
*/
//Ejemplo de switch
/*
    PIDO PAIS
    PAIS ESPAÑA -> Eres Ibérico
    PAIS PORTUGAL -> ERES Ibérico hablas portugués
    PAIS ANDORRA -> Eres ibérico y tienes Youtubers
    OTRO PAÍS -> No eres ibérico
 */ 
var pais=prompt("Introduce tu país:")
switch(pais){
    case "España":
        alert("Eres Ibérico");
        break;
    case "Portugal":
        alert("Eres Ibérico y hablas Portugués");
        break;
    case "Andorra":
        alert("Eres Ibérico y tienes Youtubers");
        break;
    default:
        alert("No eres Ibérico");
        break;
}