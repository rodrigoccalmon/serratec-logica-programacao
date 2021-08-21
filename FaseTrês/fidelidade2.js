/* O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor. */
var prompt = require("prompt-sync")();

console.log("================================");
console.log("FIDELIDADE v2");
console.log("================================");
var a = prompt("Digite seus cupons: ");
var tot = parseInt(a) * 3;
console.log("De acordo com seus cupons, você tem",tot,"pontos no programa de fidelidade!");