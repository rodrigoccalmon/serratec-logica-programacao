/* No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.
*/

var prompt = require("prompt-sync")();
console.log("================================");
console.log("21 digital");
console.log("=================================");

do { var a = prompt("Digite um número de uma carta: ");
var carta1 = parseInt(a);
var carta2 = Math.floor(Math.random() * (10 + 1));
//console.log(carta2)
var soma = carta1 + carta2;
console.log("Sorteamos o valor de ",carta2,"e somamos a sua carta digitada que foi de", carta1," e o resultado foi: ",soma);

} while (soma != 21);
