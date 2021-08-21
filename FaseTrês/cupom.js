/* É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou? */

var prompt = require("prompt-sync")();
console.log("================================");
console.log("CUPOM");
console.log("================================");
var a = prompt("Quanto Alice gastou? ");
console.log("================================");
var valor = parseInt(a);
var cupom = 190;
var totcupom = valor / cupom;
console.log("Parabéns Alice, você ganhou", Math.trunc(totcupom),"cupons.");

