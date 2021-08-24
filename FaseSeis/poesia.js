/* No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos. */

var prompt = require("prompt-sync")();

console.log("=========================");
console.log("POESIA");
console.log('=========================');

do {
    console.log("No meio do caminho tem uma pedra.");
    var resp = prompt("Deseja ler novamente os versos? [S/N] ");
       
} while(resp == 'S');