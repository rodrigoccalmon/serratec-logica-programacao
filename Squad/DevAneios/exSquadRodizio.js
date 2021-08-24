/* Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade. */

var prompt = require("prompt-sync")();

console.log("=================================");
console.log("SIGNO E DESCRIÇÃO DE PERSONALIDADE E CDZ");
console.log("=================================");

var nome = prompt("Digite seu nome: ");
var mesInformado = parseInt(prompt(nome + ". Qual é o mês do seu nascimento? (informe de forma númerica): "));
var diaDeNascimento = parseInt(prompt(nome + ". Qual é o dia do seu nascimento? "));

var mesJaneiro = "Capricornio";
var mesFevereiro = "Aquario";
var mesMarco = "Peixes";
var mesAbril = "Aries";
var mesMaio = "Touro"
var mesJunho = "Gemeos";
var mesJulho = "Cancer";
var mesAgosto = "Leao";
var mesSetembro = "Virgem";
var mesOutubro = "Libra";
var mesNovembro = "Escorpiao";
var mesDezembro = "Sagitario";

var mesDoSigno = 0;
var ano = 12;

while(mesInformado <= ano){

    if(mesInformado == 1 && diaDeNascimento <= 19) {
        console.log("Seu signo e " + mesJaneiro);
        console.log("Shura de capricórnio é o seu mestre.")
        break;
    }

    else if(mesInformado == 2 && diaDeNascimento <= 18) {
        console.log("Seu signo e " + mesFevereiro);
        console.log("Camus de áquario é o seu mestre. ")
        break;
    }

    else if(mesInformado == 3 && diaDeNascimento <= 20) {
        console.log("Seu signo e " + mesMarco);
        console.log("Afrodite de peixes é o seu mestre. ")
        break;
    }

    else if(mesInformado == 4 && diaDeNascimento <= 19) {
        console.log("Seu signo e " + mesAbril);
        console.log("Mu de áries é o seu mestre.")
        break;
    }

    else if(mesInformado == 5 && diaDeNascimento <= 20) {
        console.log("Seu signo e " + mesMaio);
        console.log("Aldebaran de Touro é o seu mestre. ")
        break;
    }

    else if(mesInformado == 6 && diaDeNascimento <= 20) {
        console.log("Seu signo e " + mesJunho);
        console.log("Saga de gêmeos é o seu mestre. ")
        break;
    }

    else if(mesInformado == 7 && diaDeNascimento <= 22) {
        console.log("Seu signo e " + mesJulho);
        console.log("Máscara da morte é o seu mestre. ")
        break;
    }

    else if(mesInformado == 8 && diaDeNascimento <= 22) {
        console.log("Seu signo e " + mesAgosto);
        console.log("Aiolia de Leão é o seu mestre. ")
        break;
    }    

    else if(mesInformado == 9 && diaDeNascimento <= 22) {
        console.log("Seu signo e " + mesSetembro);
        console.log("Shaka de viré o seu mestre. ")
        break;
    }

    else if(mesInformado == 10 && diaDeNascimento <= 22) {
        console.log("Seu signo e " + mesOutubro);
        console.log("Dohko de libra é o seu mestre. ")
        break;
    }

    else if(mesInformado == 11 && diaDeNascimento <= 21) {
        console.log("seu signo e " + mesNovembro);
        console.log("Milo de Escorpião é o seu mestre. ")
        break;
    }

    else if(mesInformado == 12 && diaDeNascimento <= 21) {
        console.log("seu signo e " + mesDezembro);
        console.log("Aiolos de sagitário é o seu mestre. ")
        break;
    }
}



