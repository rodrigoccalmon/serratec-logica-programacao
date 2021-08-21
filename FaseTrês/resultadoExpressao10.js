/* Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
*/

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;
console.log("==============================");
console.log("a.", x - y > a);
console.log("b.", (x - y * a) > c % y);
console.log("c.", y != c);
console.log("d.", (x * y) != c);
console.log("e.", (c % y) <= y % c);
console.log("f.", a < b);
console.log("g.", (z / a + x * y - 5) >= b);
console.log("h.", (c * z + 2) == a * x + y);
console.log("i.", c == (z + b));
console.log("j.", (y * 2) != 7 - b);
console.log("==============================");