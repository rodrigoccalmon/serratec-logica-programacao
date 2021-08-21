/* Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra. */

var prompt = require("prompt-sync")();

var videogame = 345;
var jogos = 1545;
var soma = (videogame + jogos);
console.log("===================================");
console.log("OPÇÕES DE PAGAMENTO");
console.log("===================================");

var parcelamento3 = soma / 3;
var parcelamento5 = soma / 5;
var parcelamento10 = ((soma * 1.5) / 100) / 10; 

console.log("PARCELAMENTO: 3 parcelas sem juros de R$",parcelamento3);
console.log("PARCELAMENTO: 5 parcelas sem juros de R$",parcelamento5);
console.log("PARCELAMENTO: 10 parcelas com 1,5% de juros sobre o total da compra R$", parcelamento10);




 