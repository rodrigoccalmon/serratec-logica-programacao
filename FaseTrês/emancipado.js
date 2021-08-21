/* É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual. */

var prompt = require("prompt-sync")();
var sexo = prompt ("Digite o seu sexo: [M/F]: " );
var nasc = prompt ("Digite o ano de seu nascimento: ");
var anoAtual = prompt ("Digite o ano em que estamos: ");
var idade = anoAtual - nasc;

if (idade > 21) {
    console.log("Você já é emancipado.");
}
if (idade > 18 && sexo == 'M'){
    console.log("Por ter mais 18 anos ou mais e ser do sexo masculino você é considerado emancipado.");
}