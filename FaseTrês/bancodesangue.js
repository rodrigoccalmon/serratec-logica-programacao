/* Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições. */

var prompt = require("prompt-sync")();

console.log("====================================");
console.log("TRIAGEM DE VOLUNTÁRIOS ");
console.log("====================================");

var idade = prompt("Digite a sua idade: ");
var peso = prompt("Digite seu peso: ");
var hep = prompt("Portador de hepatite? [S/N] ");
var malaria = prompt("Já teve malária? [S/N] ");
var doacao = prompt ("Já fez doação de sangue recente? [S/N] ");

if (idade < 16 && idade > 59 && peso < 50 && hep == 'N' && malaria == 'N' && doacao == 'N') {
    console.log("===============================")
    console.log("Infelizmente você não poderá doar neste momento.");
}
if (idade > 16 && idade < 59 && peso > 50 && hep == 'N' && malaria == 'N' && doacao == 'N'); {
    console.log("===============================")
    console.log("Aprovado. ");
    console.log("Obrigado pela sua doação. Doar sangue salva vidas. ");
}

console.log("====================================");