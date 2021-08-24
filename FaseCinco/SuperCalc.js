/* A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo número. */

var prompt = require("prompt-sync")();
console.log("================================");
console.log("SUPER CALCULADORA!");
console.log("================================");

var a = prompt("Digite um número: ");
var n1 = parseInt(a);
var operador = prompt("Qual operação você deseja fazer? [+] [-] [*] [/] ");
var b = prompt("Digite outro número: ");
var n2 = parseInt(b);
var resultado = 0

if (operador == "+") {
    resultado = n1 + n2;
    console.log("O resultado dos dois números somados é: ",resultado);
}
if (operador == "-") {
    resultado = n1 - n2;
    console.log("O resultado dos dois números subtraídos é: ",resultado);
}
if (operador == "*") {
    resultado = n1 * n2;
    console.log("O resultado dos dois multiplicados somados é: ",resultado);
}
if (operador == "/") {
    resultado = n1 / n2;
    console.log("O resultado dos dois números dividos é: ",resultado);
}


