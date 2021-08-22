/* Filhinho do Eduardo e Mônica ficou de recuperação?
O algoritmo é bem simples. Digitar 4 notas, ou seja, precisamos receber 4 dados do usuário, e salvar em 4 variáveis diferentes. Além das notas, precisamos calcular a sua média que deve ser MAIOR ou IGUAL a 7. SE a soma das 4 notas for maior ou igual a 7, a família poderá viajar, caso contrário a criança terá que fazer prova de recuperação. */

var prompt = require("prompt-sync")();

console.log("================================");
console.log("SISTEMA ESCOLAR");
console.log("================================");

var a = prompt("Digite a primeira nota: ");
var b = prompt("Digite a segunda nota: ");
var c = prompt("Digite a terceira nota: ");
var d = prompt("Digite a quarta nota: ");
console.log("================================");

var n1 = parseInt(a);
var n2 = parseInt(b);
var n3 = parseInt(c);
var n4 = parseInt(d);
var soma = n1 + n2 + n3 + n4
var media = soma / 4

if (media >= 7) {
    console.log("Aproveitem as férias. Parabéns pelas notas e até ano que vem! ");
} else {
    console.log("Infelizmente a viagem terá que ser cancelada. Esperamos você nas férias para recuperação. ESTUDE! ");
}
console.log("================================");
