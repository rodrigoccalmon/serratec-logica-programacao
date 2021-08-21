/* Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º. */

var prompt = require("prompt-sync")();

console.log("==================================");
console.log("Bem vindos a Igreja.");
var temp = prompt("Qual temperatura o fiel apresenta? ");
var mascara = prompt ("O Fiel está usando máscara? [S/N] ");


if (temp <= 37.5 && mascara == 'S') {
    console.log("Aproveite para pedir perdão dos seus pecados, pode entrar na Igreja. ");
}
else {
    console.log("Infelizmente hoje você só poderá falar com Deus da sua casa. Você aparenta estar febril ou está sem máscara. ");
}
console.log("==================================");