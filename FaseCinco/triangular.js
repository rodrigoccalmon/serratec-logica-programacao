/* O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno. */

var prompt = require("prompt-sync")();
console.log("==============================");
console.log("TRIANGULAR");
console.log("==============================");

var a = prompt("Digite a base do triângulo: ")
var base = parseInt(a);

var b = prompt("Digite a altura do triângulo: ");
var altura = parseInt(b);

var area = (base * altura) / 2

console.log(area);
