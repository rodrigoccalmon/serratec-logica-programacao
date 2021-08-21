/* Jennyffer está preparando as malas para passar o feriado prolongado na casa da sua avó, no interior, sem aglomeração. Colocou na mala 4 calças e 8 camisetas. Quantas combinações, ou, de quantas formas diferentes ela poderá usar essas roupas? */

var prompt = require("prompt-sync")();
console.log("===========================");
console.log("FAZENDO AS MALAS");
console.log("===========================");
var a = prompt("Quantas calças pretende levar? ");
var b = prompt("Quantas camisetas pretende levar? ");
console.log("===========================");
console.log("CALCULANDO COMBINAÇÕES...");
var calca = parseInt(a);
var camisa = parseInt(b);
var total = calca * camisa;
console.log("Nessas férias você poderá fazer até ",total,"de combinações.");

