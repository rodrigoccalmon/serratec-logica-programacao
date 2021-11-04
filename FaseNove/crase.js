// `
let texto = "Texto puro";
texto = 'Aspas simples';

//caractere de escape, serve para escapar a algum dos caracteres de marcação. usa a \
texto = "o que é texto \" no final";
console.log(texto);

texto = "Usando \\ dentro do texto: " 
console.log(texto); //usar duas contra barras, vai aparecer uma. 

texto = "Quebra \n de linha. e se quiser um tab usamos o \t que dará um espaço maior.";
console.log(texto);

let textoJs = `no próprio editor
eu quebro linha
a vontade. esse comando só termina
quando fecho o acento grave\` . `
console.log(textoJs);

let saudacao = "Bom dia";
texto = `Querido aluno Braya: ${saudacao}`;
console.log(texto)

texto = `a resposta de 2 + 2 é igual a ${2+2}`;
console.log(texto);