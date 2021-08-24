/* Para ajudar o operador do Caixa precisamos emitir a contagem das notas a entregar ao fornecedor nos pagamentos até mil Reais.
Valor do pagamento: 336.12
Relação de cédulas:
3 de R$ 100.00
1 de R$ 20.00
1 de R$ 10.00
1 de R$ 5.00
1.12 em moedas.

Dicas: Você precisará digitar o código “base” várias vezes, uma para cada cédula. Faça a exibição das notas da maior para a menor.
*/
var prompt = require("prompt-sync")();

console.log("=========================");
console.log("CONTAGEM DE NOTAS");
console.log("=========================");

var cem = 100;
var vinte = 20;
var dez = 10;
var cinco = 5;
var moeda = 0;

var a = prompt("Valor do pagamento: ");
var pgto = parseInt(a);

var notacem = Math.floor(pgto) / 100;
var notavinte = Math.floor(pgto) / 20;
var notadez = Math.floor(pgto) / 10;
var notacinco = Math.floor(pgto) / 5;

console.log(notacem)
console.log(notavinte)
console.log(notadez)
console.log(notacinco)

