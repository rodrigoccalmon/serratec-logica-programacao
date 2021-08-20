//Tipos de atribuição

//Literal 
var idade = 30;

//expressões
//mini calculadora de 2

var resultado;
resultado = 2 + 2;
console.log("O resultado de 2 + 2 é igual a", resultado);

resultado = 2 - 2;
console.log(`O resultado de 2 - 2 é igual a ${resultado}`);

//Outra variável
var A, B;
A = 5
B = 8

//duas variáveis com o mesmo valor
var fruta1 = "morango";
var fruta2 = "banana";
console.log(`fruta 1 = ${fruta1} e fruta 2 = ${fruta2} ` )
fruta1 = fruta2;

console.log (`Agora depois de atribuir o mesmo valor às frutas, temos o resultado de ${fruta1} é igual a ${fruta2}` );


//Cores
//Criar duas variáveis, uma de cada cor
//Depois atribua o mesmo valor de uma para outra com intuito das duas variáveis terem o mesmo resultado

var cor1 = "preto"; //var cor1 recebe preto
var cor2 = "azul"; //var cor2 recebe azul

console.log(`a minha primeira cor é ${cor1} e a minha segunda cor é ${cor2} `);
cor2 = cor1; //cor2 vai receber o conteudo da variável cor2

console.log (`agora as duas cores terão o mesmo resultado após a atribuição. a variável cor1 é ${cor1} e a varíavel cor2 é ${cor2} `);

var textos = "texto1" + "texto2";

