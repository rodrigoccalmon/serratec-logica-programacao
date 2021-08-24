/* Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato. */

/* Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true
*/

var prompt = require("prompt-sync")();
var vencimento = 15;
console.log("===========================================");
console.log("PAGAMENTO");
console.log("===========================================");

var dia = prompt("Digite o dia de hoje: ");
var numboleto = prompt("Digite o número do boleto: ");
var a = prompt("Qual dia foi feito o pagamento? ");
var boleto = parseInt(a);

console.log("Dia: ",dia);
console.log("Número do boleto: ", numboleto);
console.log("Dia de pagamento: ", boleto);

if (boleto == 10 || boleto == 11 || boleto == 12 || boleto == 13) {
    console.log("No próximo boleto você receberá um desconto. ");
}
