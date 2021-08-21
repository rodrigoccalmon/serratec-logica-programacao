//var prompt = require("prompt-sync")();
//incremento
/* toda pessoa que entrar na minha loja eu quero adicionar um. */ 
var numero = 0;

//incremento, conceito de contagem ou contadora.
numero = numero + 1;

//operador de incremento no js é o ++.
numero++;

//operador de decremento: diminui 1 na variável.
numero--;

//pode aproveitar o retorno da operação e jogar em outra variável.
var resposta = numero++;
console.log(resposta);

//colocar o ++numero; também funciona. 
var total = ++numero; //primeiro ele incrementa, depois ele retorna. 

//operador de soma abreviada, ou soma mais rápida. 
var num = 0;
num = num + 3; //nao é op de incr, e sim op de soma. 
num += 3; //é igual a num = num + 3; 

var texto = "Olá";
texto += "zepa";
texto = texto + "zepa"; // texto recebe texto + zepa.. Olá, zepa.

