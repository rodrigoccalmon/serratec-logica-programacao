/* O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero. */

var prompt = require("prompt-sync")();

console.log("===================================");
console.log("ABC da Xuxa!");
console.log("===================================");

do {
    console.log("A, B, C, D, E, F, G, H.....");
    var resp = prompt("Quer continuar cantando o ABC da Xuxa? [S/N] ");
} while (resp == 'S');

