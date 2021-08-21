/* Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles. */



var prompt = require("prompt-sync")();
console.log("====================================")
console.log("CALCULADORA");
var n1 = prompt("Digite um número: ");
var n2 = prompt("Digite outro número: ")
console.log("====================================")
var soma = parseInt(n1) + parseInt(n2);
var sub = parseInt(n1) - parseInt(n2);
var mult = parseInt(n1) * parseInt(n2);
var div = parseInt(n1) / parseInt(n2);

console.log("A soma de", n1," +", n2, "é igual a:", soma);
console.log("A subtração de", n1," -", n2, "é igual a:", sub);
console.log("A multiplicação de", n1," *", n2, "é igual a:", mult);
console.log("A divisão de", n1," /", n2, "é igual a:", div);