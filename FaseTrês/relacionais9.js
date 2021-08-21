/* O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.
*/ 

var prompt = require("prompt-sync")();
console.log("======================================");
var A = prompt("Digite um número inteiro: ");
var B = prompt("Digite mais um número inteiro: ");

if (A == B) {
    console.log("O valor do primeiro número é igual ao segundo número. ");
}
else {
    console.log("Os números têm valores diferentes. ");
}

