/* Calculadora de Páginas de leitura vs. Deadline (prazo final)

O algoritmo proposto deve funcionar da seguinte maneira:

Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação. */

var prompt = require("prompt-sync")();

console.log("==================================");
console.log("BEM VINDO AO CLUBE DO LIVRO!");
console.log("==================================");

var livro = prompt("Qual livro você está lendo no momento? ");
var a = prompt("Quantas páginas esse livro tem? ");
var pag = parseInt(a);
var b = prompt("Quantos dias você precisa para ler esse livro? ");
var dias = parseInt(b);
var conta = pag / dias;
console.log("==================================");
console.log("De acordo com as suas informações você deve ler em média",conta,"páginas por dia para terminar este livro em",dias,"dias.");
console.log("==================================");
console.log("Agora vou fazer uma sugestão de uma nova leitura com base no número de páginas que você me informou:",pag,"páginas.");

if (pag <= 100) {
    console.log("Recomendo fortemente: Revolução dos bichos e o Alienista. ");
}

if (pag > 101 && pag < 499) {
    console.log("Recomendo fortemente: O Homem Invisivel e Eu, Robo.")
}

if (pag >= 500) {
    console.log("Recomendo fortemente: Moby Dick e Duna.")
}

console.log("==================================");
console.log("BOA LEITURA! ");
console.log("==================================");


