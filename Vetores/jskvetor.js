var prompt = require("prompt-sync")();

var sapato = [];

sapato[0] = "Sandália";
sapato[1] = "Bota";
sapato[2] = "Rasteirinha";
sapato[3] = "Tenis azul";
sapato[4] = "Scarpin";

var numero = prompt("Qual número da gaveta para guardar? ");
var calcado = prompt("Qual calcado quer guardar? ");

//atribuição com uma posição númerica
//índice
sapato[numero] = calcado; 

numero = prompt("Qual número da gaveta para ver? ");

//recuperação por íncide, por posição númerica
calcado = sapato[numero];

console.log("na gaveta "+ numero + "esta guardado o calcado " +calcado);

