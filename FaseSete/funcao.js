/* função: identificador; parâmetros; retorno.
em vez de escrever var bomDia =; 
escrevemos:
 function bomDia() {  */

function bomDia () {
    //código que será executado no futuro
    return "Bom dia"; //o que vai sair, pode ser uma string
}

//chamada
bomDia();


//calculadora com funcao

function calcular(parcelaUm , operador, parcelaDois) {
    switch(operador) {
        case "+": conta = parcelaUm + parcelaDois; break;
        case "-": conta = parcelaUm - parcelaDois; break;
        case "*": conta = parcelaUm * parcelaDois; break;
        case "/": conta = parcelaUm / parcelaDois; break;
    }
        return conta;
}

var resposta = calcular(2, "+", 2);
console.log("resposta: ", resposta);

var resposta = calcular(2, "-", 2);
console.log("resposta: ", resposta);

var resposta = calcular(2, "*", 2);
console.log("resposta: ", resposta);

var resposta = calcular(2, "/", 2);
console.log("resposta: ", resposta);

