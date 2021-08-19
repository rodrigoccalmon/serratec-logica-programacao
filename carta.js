var prompt = require("prompt-sync")(); 

var nome = prompt("Qual seu nome? ");
var idade = prompt("Qual a sua idade? ");
var exercicios = prompt("Quantos exercícios de programação você pensa em fazer por dia? ");
var tempo = prompt("Quanto tempo você planjea estudar por dia? ");

console.log(`Caro ${nome} aqui é o seu EU do futuro. Quero dizer que por mais que você ache que já passou da hora de criar juízo por ter ${idade} de idade quero dizer para você que idade é só um número e que cada um tem o seu momento, e o seu momento é esse. Gostei de saber que você pretende fazer ${exercicios} por dia e que irá dedicar ${tempo} horas do seu dia para o estudo. FOCO NA MISSÃO! `);