/* O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido. */

var prompt = require("prompt-sync")();

console.log("=======================================");
console.log("Vamos verificar se as medidas formam um triângulo válido. ");
console.log("=======================================");

var base = prompt("Digite a base do triângulo: ");
var altura = prompt("Digite a altura do triângulo: ");
var total = (base * altura) / 2;

console.log("A área do seu triangulo é: ", total);



