const prompt = require("prompt-sync")();
console.log("\n=======================================================");
var pergunta = prompt("Qual cor está aparecendo no sanitário? ");
var resposta = "verde";


if (pergunta == "verde"){
    console.log("Pode entrar. Não esqueça de lavar as mãos. ");
}
else{
    console.log("Por favor, segure mais um pouco e aguarde a sua vez. ");
}
console.log("\n======================================================");