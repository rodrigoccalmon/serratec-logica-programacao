/* Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela. */

var prompt = require("prompt-sync")();
console.log("=================================");
var n1 = prompt("Digite um número. ");
var n2 = prompt("Digite um número. ");

if (n1 > n2) {
    console.log("O maior número digitado foi: ", n1);
} else {
    console.log("O maior número digitado foi: ", n2);
}
console.log("=================================");
