var array = [1, 3, 5, 7, 9];

var numero = parseInt(prompt("Por favor, ingresa un número:"));

if (numero >= 1 && numero <= 9) {
    if (array.includes(numero)) {
    alert("El número ya está en el array.");
  } else {
      for (var i = 0; i < array.length; i++) {
      if (numero < array[i]) {
        array.splice(i, 0, numero);
        break;
        }
    }
         if (i === array.length) {
      array.push(numero);
        }
    alert("El nuevo array es: " + array.join(", "));
  }
}else{
    alert("El número está fuera del rango permitido.");
}

