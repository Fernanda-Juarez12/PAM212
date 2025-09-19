let nombre = "Armando"; //se reasigna 
const edad = 25; //no cambia el valor

nombre = "Ana Maria";

var saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
console.log(saludo);

//ejercicio 2
const cuadrado = numero => numero * numero;

console.log(cuadrado(8)); // 64
console.log(cuadrado(7)); // 49
console.log(cuadrado(12)); // 144

// ejercicio 3
// Crea un arrow function llamada saludoPersonalizado que reciba dos parámetros: nombre y edad, y retorne una cadena como la siguiente
// // "Hola, me llamo Isay y tengo 37 años.

const saludoPersonalizado = (nombre, edad) => 
  `Hola, me llamo ${nombre} y tengo ${edad} años.`;

console.log(saludoPersonalizado("Fernanda", 19));