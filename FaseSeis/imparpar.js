/* Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares). */

var prompt = require("prompt-sync")();
console.log("==================================");
console.log("Par ou Ímpar");
console.log("==================================");


var a = prompt("Você quer contar até que número? ");
var tot = parseInt(a);

for(var i = 0; i < tot; i++) {
    if (i % 2 == 0) {
        console.log("Aqui estão os números páres em ordem que você me pediu: ",i)
    }
    else {
        console.log("Aqui estão os números ímpares em ordem que você me pediu: ",i)
    }
}


