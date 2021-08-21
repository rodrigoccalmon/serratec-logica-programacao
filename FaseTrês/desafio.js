/* A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares. */


var prompt = require("prompt-sync")();
console.log("========================");
console.log("Hoje é dia 22/08. Só será permitida a entrada daqueles que têm o CPF par. ");

var cpf = prompt ("Digite os últimos dois números de seu CPF: ");
if (cpf % 2 == 0) {
    console.log("Pode entrar. Passe alcoól em gel antes.")
}
else {
    console.log("Pedimos a gentileza de retornar amanhã. ");
}