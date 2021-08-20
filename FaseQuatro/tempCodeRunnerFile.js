var prompt = require("prompt-sync")();
console.log("\n=====================================");
console.log("\nResponda algumas perguntas: ");
console.log("\n=====================================");
var motor = prompt("O motor está ligado? [S/N] ");
var gasolina = prompt("Tem gasolina para chegar até o centro? [S/N] ");
console.log("\n=====================================");


//processamento


var ligado = motor == 'S' && gasolina == 'S';
var resposta = ligado;
console.log("\n=====================================");


//saída
console.log("Carro ligado? ", resposta);