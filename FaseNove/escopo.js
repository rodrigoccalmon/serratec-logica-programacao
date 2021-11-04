'use strict';
//declaração de função

function bomDia() {
    console.log("Bom dia" + texto);
    let resposta = "Deu tudo certo";
    return resposta //n ta devolvendo a var, e sim o conteudo da variavel.
    // return = "deu tudo certo"; como se fosse isso
}

//global, visibilidade, amplo

var texto = "Em qualquer lugar";
var teste = true;

if(teste) {
    console.log(texto);
}
bomDia();

//local, reduzido;
function exibirMensagem() {
    let ola = "Olá";    //let é uma variavel que fica dentro do escopo.
    console.log(ola);
    ola = "tudo bom?" //dentro do meu grupinho, fora daqui a ola não funciona mais.
}

//chamada da função
exibirMensagem();
ola = "tudo bem"
console.log(ola); //var ola não esta definida. ela não existe nesse escopo, no contexto global do programa. a variavel ola so funciona dentro da função. 

const mensagem = "Último dia! ";
const mensagem = "Yuhul! "
//vai dar erro, const já foi declarado. não pode declarar de novo. 
var teste = true;

if(teste) {
    const mensagem = "Uhul!";
    console.log("Dentro do if: " + mensagem);//funciona dentro do if
}
console.log("escopo global: "+ mensagem);

