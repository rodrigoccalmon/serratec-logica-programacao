/* Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado. */

var prompt = require("prompt-sync")();
console.log("===================================");
console.log("DOBRO DO VALOR");
console.log("===================================");
var n = prompt("Digite um número. ");
var num = parseInt(n);
var dobro = num * 2;
console.log("===================================");
console.log("O dobro do valor de",num, "é:", dobro);
