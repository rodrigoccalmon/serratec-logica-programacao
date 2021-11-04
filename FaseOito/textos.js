//strings == cadeia de caracteres;

var texto = "uma string é um vetor!";

//teoricamente podemos fazer isso:

var trecho = texto[0];
console.log(trecho); //vai pegar a posi 0 do vetor e aparece a letra u

var tamanho = texto.length;
console.log(tamanho); //tamanho dessa string, vai resultar 22.

//assim como um vetor a string inicia em 0. 

trecho = texto.substr(4, 6) //onde eu quero iniciar minha cópia, começo na 4 e vou até a posição 6. A partir de 4 + seis caracteres. 
console.log(trecho) 

//assim como posso copiar um pedaço com o substr, podemos saber se existe um caracter determinado dentro do meu texto ou nao: 

var posicao = texto.indexOf(" ") //quero saber o indicie do espaço. incicie é a posição. o indície do espaçinho do meu texto. vai retornar um valor inteiro 
console.log(posicao);

//existem muitas funções com string, que a partir de agora podemos usar, por exemplo: posso pegar um texto e passar para maiuscula:
trecho = texto.toUpperCase();
console.log("tudo em maiuscula: ",trecho);

//existe o para miniscula:
trecho = texto.toLocaleLowerCase();
console.log("tudo em minuscula: ", trecho);

//existe tbm uma função interessante que é a do replace. ela serve para substituir alguma coisa, digamos uma frase:
var aluno = "Maria é muito chata e muito rica";
//quero trocar a palavra chata para legal:

const antigo = "chata";
const novo = "legal";
var posicao = aluno.indexOf(antigo);
var trecho = aluno.substr(0, posicao);
posicao += antigo.length;
trecho = trecho + novo + aluno.substr(posicao, 100);
console.log(trecho);

//função substittuir já existe:
trecho = aluno.replace(antigo, novo) //1o valor antigo a ser subst, e dps o 2o é o valor novo, o que vai ser substittuido.
console.log("novo trecho com replace: ", trecho);

var aluno = "maria é muito chata e muito rica";
var trecho = aluno.replace("muito", "pouco");
console.log(trecho);

