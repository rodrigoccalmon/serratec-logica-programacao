/* O programa otimista não consegue ver frases negativas. Toda vez que um texto possui a palavra “não”, ele substitui por “sim”! */

var prompt = require("prompt-sync")();
var resp = prompt("Olá, tudo bem? ");

function positivo(resp) {
    if (resp == "nao") {
    return resp.replace("nao", "sim");
    } 
}

function positivo(resp);
console.log(resp);
