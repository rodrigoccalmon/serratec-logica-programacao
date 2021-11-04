/* O programa “cinco lembranças” vai ler quantos números o usuário quiser lançar. Após as leituras, serão apresentados na tela os cinco últimos números digitados. A entrada termina com o número zero (que não será lembrado). */

var prompt = require("prompt-sync")();

let lembranca = [];

for(let i = 0; i < 10; i++){
    let numeros = parseInt(prompt("Qual número quer armazenar? "))
    lembranca.push(numeros);
}
console.log("Os últimos 5 números digitados foram: ",lembranca[5],lembranca[6],lembranca[7],lembranca[8],lembranca[9]);

