/* Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10 */

var prompt = require("prompt-sync")();
console.log("===========================");
console.log("CURSINHO");
console.log("============================");

var a = prompt("Digite a nota da P1: ");
var n1 = parseInt(a);
var b = prompt("Digite a nota da P2: ");
var n2 = parseInt(b);
var soma = n1 + n2
var media = (n1+n2) / 2

if (media <= 4) {
    console.log("Reprovado.")
}
if (media == 4 || media == 5 || media || 6) {
    console.log("Recuperação.")
}
if (media == 7 || media == 8) {
    console.log("Aprovado.")
}
if (media == 9 || media == 10 ) {
    console.log("Destaque.")
}

