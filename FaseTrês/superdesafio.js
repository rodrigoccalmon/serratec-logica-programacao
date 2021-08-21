/* O programa “Par ou ímpar” irá solicitar que dois jogadores entrem com um número, e anunciar o vencedor usando as iniciais das palavras. */

var prompt = require("prompt-sync")();
console.log("======================================");
console.log("Jogo do [P] Par ou [I] Ímpar");
console.log("======================================");

var n1 = prompt("Digite um número: ");
var n2 = prompt("Digite outro número: ");

var soma = parseInt(n1) + parseInt(n2);


if (soma % 2 == 0) {
    console.log("Somando os dois números temos o valor de ", soma, " que é [P]. ");
}
else {
    console.log("Somando os dois números temos o valor de ", soma, " que é [I]. ");
}