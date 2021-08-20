const prompt = require("prompt-sync")();

console.log("Digite a sigla do estado em que você mora. ");

var uf = prompt("Onde você mora? ");
var resposta = "";

switch (uf) {
    case "RJ", "rj": 
    resposta = "Rio de Janeiro"
    console.log("Você mora no ", resposta);
    break;

    case "SP", "sp":
    resposta = "São Paulo";
    console.log("Você mora em ", resposta);
    break;

    case "MG", "mg":
    resposta = "Minas Gerais";
    console.log("Você mora em ", resposta);
    break;

    case "RS", "mg":
    resposta = "Rio Grande do Sul";
    console.log("Você mora no ", resposta);
    break;

    default:
    console.log("Não temos informação sobre esse Estado. ");
}