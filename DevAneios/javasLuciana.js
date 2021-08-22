/* A Lanchonete Java'S solicitou ao Squad DevAneios um algoritimo que apresentasse ao seu cliente um cardápio com a lista de lanches e preços para sua escolha e ao final do seu pedido lhe fosse gerada a conta com a mensagem "Favor dirija-se ao caixa". */

var prompt = require("prompt-sync")();

console.log("========================================");
console.log("Bem vindo a lanchonete Java'S!");
console.log("========================================");
console.log("Abaixo iremos apresentar alguns itens do cardápio, você poderá escolher digitando o número do menu. ");
var a = prompt("1- Trio com cheeseburguer, batata frita média e coca cola lata. 2- Trio com X-Tudo, batata frita grande e coca-cola 1Litro. 3 - Trio com X-Tudão, batata recheada e coca-cola 2Litros. Digite, por favor, o número do lanche desejado para saber o valor. [1] [2] ou [3]: ");
console.log("========================================");
var lanche = parseInt(a);


switch (lanche) {
    case 1: 
        console.log("Por favor, dirija-se ao caixa ao lado. Valor: R$ 25,00. ");
        break;

    case 2:
        console.log("Por favor, dirija-se ao caixa ao lado. Valor: R$ 30,00. ");
        break;

    case 3:
        console.log("Por favor, dirija-se ao caixa ao lado. Valor: R$ 45,00. ");
        break;
}

