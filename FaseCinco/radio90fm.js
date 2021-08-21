/* O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”! */

const ler = require("prompt-sync")();

do {
    var telefone = ler ("Ligando para você: ");

    var errado = (telefone != "90show");

    if (errado)
      console.log("Que pena...");
    else
      console.log("Parabéns você ganhou! ");
}
while (errado);