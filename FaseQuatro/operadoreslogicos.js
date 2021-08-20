//Relacionais

var aluno = "";

var presente = (aluno != "");
console.log("Aluno está presente? "); 
console.log(presente)


//Lógicos - só operam com valores lógicos. verdadeiro OU falso. 
/* são operações especificas com true e false, para ser binario precisa de dois operandos (2 + 2)
tabela verdade: lista das operações com os valores lógicos, tudo que pode fazer com o operador. no máximo são 4 combinações possíveis pois só temos dois operandos. 

//operador lógico binário de conjunção, ou and, ou e, a expressão só vai ser verdade se ambos os operandos são verdade também. 

//boolean */

var maria = true;
var carol = true;
//quero saber se AMBOS alunos estão presentes - operador lógico &&
var estaoPresentes = maria && carol;
var estaoPresentes = true && true;

console.log("estão presentes? ", estaoPresentes)
//para ser true as duas expressões têm que ser verdade.

//operador lógico de disjunção, OU, é mais flexível, a expressão é verdade quando qualquer dos operando é verdade. representado pelo ||. qualquer dos valores é verdade, a expressão vai ser true.

var servidorDragao = true;
var serverPirata = true;

var entrar = servidorDragao || serverGuerrilha;

console.log("estou conectado no discord?, entrar ",entrar);

//negação, operador lógico unário. negação ou not. se o operando era verdade, ele vira falso. se o operando era falso, ele vira verdadeiro.
//negação significa negar, mudar o resultado da expressão. símbolo ! bang exclamação

var prof = true;
var serverGalera = ! prof;

console.log("posso entrar no server de geral?", serverGalera);

var moto = true;
var carro = true;
var vuc = true;

var motoristaProfissional = (moto && carro) && vuc;
console.log("É motorista profissional? ",motoristaProfissional);

//var prompt = require("prompt-sync")();

var prompt = require("prompt-sync")();

//entradas
var A = prompt("Possui habilitação A? Digite [S/N] ");
var B = prompt("Possui habilitação B? Digite [S/N] ");
var C = prompt("Possui habilitação C? Digite [S/N] ");

//processamento
var motoca = (A == "s") || (A == "S");
var carro = (B == "s") || (B == "S");;
var vuc = (C == "s") || (C == "S");

var resposta = motoca && carro && vuc;

//saída
console.log("Você é motorista de verdade? ", resposta)