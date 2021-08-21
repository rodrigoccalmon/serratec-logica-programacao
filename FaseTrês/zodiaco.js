/* O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais. */

var prompt = require("prompt-sync")();
console.log("=========================================");
console.log("Vamos descobrir se você é considerado inteligente ou não. ");
console.log("=========================================");

var mes = prompt("Digite o mês do seu nascimento: ");


if (mes == 1 || mes == 2) {
    console.log("Parabéns. De acordo com o astrólogo Moises Zépa você é inteligente. ");
} else {
    console.log("De acordo com o astrólogo Moises Zépa você não é inteligente. Por favor, tente nascer de novo. "); 
}
