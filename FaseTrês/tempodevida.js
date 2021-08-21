/* O programa “Tempo de vida” irá imprimir a soma das idades de todos os colegas do seu squad. Pergunte a cada um a idade e não esqueça a sua! Depois faça a atribuição da expressão que você montou em uma variável inteira. */

/* beatriz = 22
guilherme = 28
higor = 21
vivi = 41
rodrigo = 30
luciana = 45 */

var prompt = require("prompt-sync")();

console.log("========================================")
var beatriz = prompt("Beatriz, qual a sua idade? ");
var guilherme = prompt("Guilherme, qual a sua idade? ");
var higor = prompt("Higor, qual a sua idade? ");
var vivi = prompt("Vivi, qual a sua idade? ");
var rodrigo = prompt("Rodrigo, qual a sua idade? ");
var luciana = prompt("Luciana, qual a sua idade? ");
console.log("========================================")

var tot = parseInt(beatriz) + parseInt (guilherme) + parseInt(higor) + parseInt(vivi) + parseInt (rodrigo) + parseInt(luciana);

console.log("Pessoal, ao todo temos um total de ", tot, "anos.");

