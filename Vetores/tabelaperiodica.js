/* Na “tabela periódica”, o nome do elemento químico será exibido após a digitação do seu número atômico. Dica: Você não precisa codificar toda a tabela, apenas os 15 primeiros ou os mais importantes. Os demais podem ser inseridos por leitura, ao digitar uma posição não preenchida. */
var prompt = require("prompt-sync")();

let elemento = [];
elemento.push("H");
elemento.push("Li");
elemento.push("Na");
elemento.push("K");
elemento.push("Rb");
elemento.push("Cs");
elemento.push("Fr");

let num = parseInt(prompt("Digite o número do elemento na tabela periódica: "));
let el = elemento[num];
console.log(`Na posição ${num} da tabela periódica temos o ${el}. `);

let add = prompt("Gostaria de adicionar algum elemento à nossa pequena tabela? Se sim, digite o elemento abreviado. ");


