
var prompt = require("prompt-sync")();

/* recursividade é uma forma de repetição.já vimos que fazemos repetições definidas, indefinidas.
repetições atraves de iteradores;
repetições a partir do conceito recursividade.
recursividade é o programador chamar a própria função dentro dela mesma. dentro dela ela chama ela mesma. gera uma repetição. 
*/

/*precisa resolver um caso base.é necessário resolver uma condição única, que é o ponto de parada. a recursividade para de repetir no caso base. */


function substituirTodos(frase, antigo, novo) {
    //processamento abaixo: trabalho dessa função é substituir um txt pelo outro. 

    var resultado = frase.replace(antigo,novo);
    var posicao = resultado.indexOf(antigo);

    //caso base abaixo:

    if(posicao > -1) {
        console.log("Ainda tem não.");
        resultado = substituirTodos(resultado,antigo, novo);
    } else {
        console.log("tudo substituido.")
    }
    return resultado;
}

var frase = "Eu não vou terminar esse curso. Eu não tenho computador. Hoje não está sol. ";

var nova = substituirTodos(frase, "não", "sim");
console.log(nova);

//com laço while

function substituirTudo(texto, antigo, novo) {
    var resultado = texto;
    do {
        resultado = resultado.replace(antigo, novo);
        var posicao = resultado.indexOf(antigo);
    }
    while (posicao > -1);

    return resultado;
}

nova = substituirTudo(frase, "não", "certeza");
console.log(nova);