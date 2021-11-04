/* A agendinha de contatos agora pode armazenar até 10 nomes e números de telefone, porém o usuário é quem escolhe em qual posição quer guardar o contato. Caso a posição já esteja ocupada, ele será questionado se quer ou não substituir. Todos os contatos continuam sendo exibidos ao final. Mas as posições ainda não utilizadas aparecem com o texto <vazio>. */
var prompt = require("prompt-sync")();

let agenda = [];

for (i = 0; i < 2; i++) {

var nome = prompt("Qual nome? ");
agenda.push(nome);
}
console.log(agenda);