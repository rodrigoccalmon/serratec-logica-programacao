/* Delivery de comida japonesa iniciando suas atividades precisa contratar motoboy e, como tem uma certa urgência na contratação, não pode ficar perdendo tempo com currículos que não atendam aos requisitos da vaga, o objetivo é fazer uma pré-seleção e permitir que somente os canditados que cumpram tais requisitos enviem seu currículo para o RH. Possui CNH A? CNH na validade? Experiência na área? 
Todas respostas têm que ser verdadeiras  para o candidato estar apto a se candidatar. */

var prompt = require("prompt-sync")();

console.log("================================");
console.log("MOTOBOY");
console.log("================================");

var cnh = prompt("Motoboy possui CNH A? [S/N]: ");
var validade = prompt("A CNH está na validade? [S/N]: ");
var xp = prompt("Motoboy possui experiência na área? [S/N]: ");

console.log("================================");

if (cnh == 'S' && validade == 'S' && xp == 'S') {
    console.log("O candidato está apto a se candidatar para a vaga de motoboy. ")
}
else {
    console.log("Infelizmente o candidato não atende aos requisitos. ");
}

