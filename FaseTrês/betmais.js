/* O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos. */


var prompt = require("prompt-sync")();
console.log("=======================================");
console.log("APOSTAS");
console.log("========================================");

var a = prompt("Digite um número de 1 a 10. ");
var b = prompt("Digite um número de 1 a 10. ");
var c = prompt("Digite um número de 1 a 10. ");
var d = prompt("Digite um número de 1 a 10. ");

var numA = parseInt(a);
var numB = parseInt(b);
var numC = parseInt(c);
var numD = parseInt(d);

var soma = numA + numB + numC + numD;
var sub = numA - numB - numC - numD;

console.log("Somando os resultados dos números digitados temos:",soma);
console.log("Diminuindo os resultados dos números digitados temos:",sub);

