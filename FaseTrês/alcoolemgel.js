/* O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame. */

var prompt = require("prompt-sync")();
console.log("============================");
console.log("ÁCOOL");
console.log("============================");

var a = prompt("Digite a quantidade em mililitros da garrafa. ");

var garrafa = parseInt(a);
var qtdalc = (garrafa * 70 )/ 100;

console.log("Sua garrafa deverá ter pelo menos",qtdalc,"ml de álcool.");