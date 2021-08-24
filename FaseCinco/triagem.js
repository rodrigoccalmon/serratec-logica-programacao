/* A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false

*/

var prompt = require("prompt-sync")();

console.log("=======================");
console.log("TRIAGEM");
console.log("=======================");

var nome = prompt("Digite o nome do paciente: ");
var pergunta = prompt("Paciente está vacinado? [S/N] ");

console.log("=======================");

if (pergunta == 'S' || pergunta == 's'); {
    console.log("Paciente: ", nome);
    console.log("Já está vacinado? ", pergunta);
    console.log("Sujeito a infecção? False.")
}


