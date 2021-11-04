/* 
as linhas de ônibus da capital são identificadas por números: a empresa "pao de açucar" opera 8 linhas. 
O passageiro irá digitar o número do ônibus que está vindo, e o programa mostra o nome da linha/trajeto.
Rosario x Pimenteiras -- Perpetuo x Fonte Santa -- Caleme x Alto -- Pimentel x vale do paraiso -- Vila Muqui x Varzea -- Comary x Soberbo -- Rodoviária x vale alpino -- alto x canoas 
*/

var prompt = require("prompt-sync")();

var onibus = [];
onibus[0] = "Rosario x Pimenteiras";
onibus[1] = "Perpetuo x Fonte santa";
onibus[2] = "Caleme x Alto";
onibus[3] = "Pimentel x Vale do Paraiso";
onibus[4] = "Vila Muqui x Varzea";
onibus[5] = "Comary x Soberbo";
onibus[6] = "Rodoviária x vale alpino"
onibus[7] = "Alto x canoas";

var a = prompt("Digite o número do ônibus que está vindo: ");
var num = parseInt(a) - 1;
var linha = onibus[num]

console.log("O ônibus que está vindo é o: ", linha);

