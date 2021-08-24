/* Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:
Alterar a mensagem de resultado, para dizer quais motivos impediram o voluntário de participar da doação (ou parabenizar quando aprovado).
Assim que a primeira restrição for atendida, não serão feitas as  perguntas subsequentes. */

var prompt = require("prompt-sync")();

console.log("====================================");
console.log("TRIAGEM DE VOLUNTÁRIOS v2 ");
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
