/* Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.
 */

var prompt = require("prompt-sync")();
console.log("==========================");
console.log("GINCANA DO BEM");
console.log("==========================");


var equipeA = prompt ("Equipe A: digite a quantidade de pacotes arrecadados: ");
var feijaoA = prompt ("Equipe A: quantos pacotes de feijão sua equipe arrecadou? ");
console.log("===========================================================")
console.log("===========================================================")
var equipeB = prompt("Equipe B: digite a quantidade de pacotes arrecadados: ");
var feijaoB = prompt ("Equipe B: quantos pacotes de feijão sua equipe arrecadou? ");

var totA = parseInt(equipeA) + parseInt(feijaoA) * 2;
var totB = parseInt(equipeB) + parseInt(feijaoB) * 2;
var tot = totA + totB;

console.log("===========================================================");
console.log("CALCULANDO DOAÇÕES.")
console.log("===========================================================");
console.log("Ao todo tivemos", tot, "KG de alimentos. Que maravilha, pessoal! ");

if (totA > totB) {
    console.log("Parabéns Equipe A, vocês arrecadaram ", totA, "KG de alimentos e venceram a gincana! ");
}
else {
    console.log("Parabéns Equipe B, vocês arrecadaram ", totB, "KG de alimentos e venceram a gincana! ");
}
