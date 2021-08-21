/* O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.
*/
var prompt = require("prompt-sync")();

console.log("===================================");
console.log("QUADRARO");
console.log("===================================");

var n = prompt("Digite um número: ");
var num = parseInt(n);
var quadrado = num * num;

console.log("===================================");
console.log("O quadrado do número",num, "é:", quadrado);
