/*exercício digestivo

o shopping decidiu colocaa entrada dos sanitários um indicador luminoso de capacidade. antes de entrar, a pessoa deve responder se o indicador está verde ou vermelho. caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar. */

const prompt = require("prompt-sync")();

console.log("============================================");
var verde = prompt("Está aparecendo a luz verde para você? [S/N] ");
var vermelho = prompt("Está aparecendo a luz vermelha para você? [S/N] ");

if (verde == "S") {
    console.log("Pode entrar. Não se esqueça de lavar as mãos. ");
}
if (vermelho == "S") {
    console.log("Por favor, espere a sua vez. ");
}
console.log("============================================");





