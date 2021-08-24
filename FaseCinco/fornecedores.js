/* O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.

Valor: 1202.00
Pagamento em cheque.
Valor: 336.00
Pagamento em dinheiro.
*/

var prompt = require("prompt-sync")();
console.log("===========================");
console.log("SETOR DE COBRANÇA");
console.log("===========================");

var a = prompt("Valor: ");
var valor1 = parseInt(a);

if (valor1 >= 1000 ) {
    console.log("Pagamento em cheque. ");
}
else {
    console.log("Pagamento em dinheiro. ")
}    



