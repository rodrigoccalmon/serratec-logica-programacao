/* O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit. */


var prompt = require("prompt-sync")();

console.log("================================================");
var graus = prompt("Digite quantos graus está na sua cidade: ");
console.log("================================================");

var fr = parseInt(graus)
var calc = (fr * 9/5) + 32;

console.log("Se a temperatura de sua cidade fosse marcada em escala Fahrenheit estaria:", calc, "F");



