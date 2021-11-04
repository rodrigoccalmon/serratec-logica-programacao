/* O aplicativo do “contrato de serviços” não tem seletores. O cliente precisa responder a duas perguntas: “Li o regulamento” e “Aceito o contrato”. A mensagem correspondente aos serviços contratados será impressa, conforme:
Ambos desmarcados: Você precisa aceitar o contrato antes de prosseguir.
Qualquer marcação: Avançamos um pouco! Mas ainda faltou um aceite.
Ambos marcados: Parabéns! Tudo certo com nosso acordo! */ 

var prompt = require("prompt-sync")();

let reg = prompt("Leu o regulamento? [S/N] ");
let act = prompt("Aceita o contrato? [S/N] ");

if (reg == 'S' && act == 'S') {
    console.log("Parabéns! Tudo certo com nosso acordo.");
}
if (reg == 'N' && act == 'S') {
    console.log("Avançamos um pouco, mas ainda faltou um aceite. ")
}
if (reg == 'N' && act == 'N'){
    console.log("Você precisa aceitar o contrato antes de prosseguir. ");
}