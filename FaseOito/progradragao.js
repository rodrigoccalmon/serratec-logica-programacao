var prompt = require("prompt-sync")();

console.log("Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!")
console.log("─────▄████▀█▄")
console.log("───▄█████████████████▄")
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼")
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲")
console.log("████████████████████▀▀")
console.log("Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪");

var arma = prompt("Digite S, E ou F: ");

var texto = ""
var sorteio = Math.floor(Math.random() * 3);

//mapa
const armas = ["S", "E", "F"];
var dragao = armas[sorteio];
//sapato ganha faca, faca ganha de espada, espada ganha de sapato.

if (dragao == arma) {
    texto = "Ninguém vai ganhar, ninguém vai perder... vai todo mundo perder"
}

console.log(texto);