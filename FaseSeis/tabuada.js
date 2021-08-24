/* Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar. */
/* Tabuada de: 7
7 x 1 = 7
7 x 2 = 14
…

*/

var prompt = require("prompt-sync")();

console.log("=====================");
console.log("TABUADA");
console.log("=====================");

var a = prompt("Escolha um número: ");
var num = parseInt(a);

for (var i = 1; i <= 10; i++){
    console.log(num * i);
}


