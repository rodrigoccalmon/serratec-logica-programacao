/* sapateira com 5 sapatos */

var prompt = require("prompt-sync")();
//antes fazíamos assim: 
var sapato0 = "";
var sapato1 = "";
var sapato2 = "";
var sapato3 = "";
var sapato4 = "";

for (var i = 0; i< 4; i++) {


        const numero = prompt("Qual o número da gaveta? ");
        const calcado = prompt("Qual sapato você quer guardar? ");

    if ( numero == "0" ) {
        sapato0 = calcado;
    }
}    
    //fazer um if else para todos os sapatos.... não é viável para trabalhar no dia a dia.

    //isso significa um vetor, ou array, em duas formas:     
// var vetor = new Array(5); //posso guardar 5 informações dentro

var sapato = [];

sapato[0] = "Sandália";
sapato[1] = "Bota";
sapato[2] = "Rasteirinha";
sapato[3] = "Tenis azul";
sapato[4] = "Scarpin";

//utili








