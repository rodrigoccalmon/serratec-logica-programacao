/* O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira. */

var prompt = require("prompt-sync")();
console.log("============================");
console.log("ENTREVISTA");
console.log("============================");

var nome = prompt("Digite seu nome: ");
var vogal = "";
var primeira = nome.substr(0, 1);

// mais fácil criar uma função. que fazer um monte de if, ou switch.

if (vogal = (primeira == "A") || (primeira == "E") || (primeira == "I") || (primeira == "O") || (primeira == "U")) {
    console.log("Sua entrevista será na segunda-feira. ");
} 
else {
    console.log("Sua entrevista será na terça-feira. ");
}
