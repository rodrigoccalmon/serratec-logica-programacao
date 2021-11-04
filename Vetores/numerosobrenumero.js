/* em numero sobre numero o programa solicita uma entrada inteira, mostra a sequencia descrescente entre numero ate 1 e a soma de todos valores da sequencia */

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número: "));
let vetornum = [];
let novonum = 0
let soma = 0;

for (var i = 0; i < num; i++) {
    vetornum.push(num);
}
for (var i = 0;  i < vetornum.length; i++) {
    vetornum[i] = num - 1;
    num = num - 1;    
    soma = vetornum[i] + soma
}
vetornum.sort();
vetornum.reverse();
console.log(vetornum);
console.log(soma);