/* No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. */
console.log("==============================");
console.log("Consulta TSE");
console.log("==============================");

var prompt = require("prompt-sync")();
var idade = prompt("Digite a sua idade: ");

if (idade >= 16) {
    console.log("Já tirou seu título de eleitor? Você está apto  votar. Vote no 20! ");
} 
else {
    console.log("Aguarde mais alguns anos. ");
}
console.log("==============================");