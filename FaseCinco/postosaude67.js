/* O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje. */

console.log("================================");
console.log("VACINAÇÃO COVID PARA 67 ANOS.");
console.log("================================");

var prompt = require("prompt-sync")();
var a = prompt("Digite sua idade: ");
var idade = parseInt(a);

if (idade > 67) {
    console.log("Por quê não vacinou ainda?")
}
if (idade < 67) {
    console.log("Volte na próxima semana.")
}
if (idade == 67){
    console.log("Vacinação hoje. ");
}
