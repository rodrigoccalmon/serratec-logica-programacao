/* O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
*/
var prompt = require("prompt-sync")();

console.log("================================");
console.log("FIDELIDADE");
console.log("================================");
var a = prompt("Digite seus cupons: ");
var tot = parseInt(a);
console.log("De acordo com seus cupons, você tem",tot,"pontos no programa de fidelidade!");