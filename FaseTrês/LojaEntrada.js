/* O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir. */

var prompt = require("prompt-sync")();

var limite = 10;
console.log("========================");
var qtd = prompt("Quantas pessoas têm na loja? ");

if (qtd < limite) {
    console.log("Pode permitir a entrada do cliente.");
}
else {
    console.log("Peça para esperar alguém sair.");
}
console.log("========================");