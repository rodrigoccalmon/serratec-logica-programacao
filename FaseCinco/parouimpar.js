/* Os jogadores querem que o programa “Par ou ímpar” escreva respostas mais completas. Dessa vez, eles querem fazer sua escolha antes de digitar os números.
= Par ou ímpar =
Jogador 1, escolha [par] ou [impar]: impar
Quantos dedos: 3
Jogador 2, quantos dedos: 3

A soma é 6, como esse número é par, o jogador 2 venceu!

*/

var prompt = require("prompt-sync")();

console.log("==========================");
console.log("PAR OU ÍMPAR");
console.log("==========================");

var resp1 = prompt("Jogador 1, escolha: [PAR/ÍMPAR]: ");
var a = prompt("Quantos dedos? ");
var qtdDedosA = parseInt(a);

var b = prompt("Jogador 2, quantos dedos? ");
var qtdDedosB = parseInt(b);

var soma = qtdDedosA + qtdDedosB;

if (soma % 2 == 0 && resp1 == 'PAR') {
    console.log("A soma é ", soma," e como esse número é par o jogador 1 venceu! ")
}
else {
    console.log("A soma é ",soma," e como esse número é ímpar, o jogador 2 venceu.")
}



