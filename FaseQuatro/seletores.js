const prompt = require("prompt-sync")();

const LIMITE_CLIENTES = 8;

console.log("Tem uma pessoa na porta da loja querendo entrar. ");
var qtde = prompt("Quantas pessoas temos na loja agora? ");

var permitir = qtde < LIMITE_CLIENTES;
var texto = "";

if (permitir)
    texto = "Pode permitir a entrada do cliente que está na fila. ";
    console.log(texto);

if (true)
    var segundacondicao = ";";
    console.log("console: ", texto)