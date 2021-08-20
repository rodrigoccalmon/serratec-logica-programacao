/* 
Requisito: criar um programa para saber se o carro está ligado ou desligado.
*/

//entrada

var prompt = require("prompt-sync")();
console.log("\n=====================================");
console.log("\nResponda algumas perguntas: ");
console.log("\n=====================================");
var motor = prompt("O motor está ligado? [S/N] ");
var gasolina = prompt("Tem gasolina para chegar até o centro? [S/N] ");

//processamento

var ligado = motor == "S" && gasolina == "S";
var resposta = ligado;
console.log("\n=====================================");

//saída
console.log("\nCarro ligado? ", resposta);
