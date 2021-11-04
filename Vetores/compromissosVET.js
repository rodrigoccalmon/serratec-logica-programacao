/* O programa “Compromissos” gerencia a sua agenda do mês. Cada dia só comporta um compromisso. Você pode digitar um compromisso, informando o dia e a descrição, e consultar se existe algum apontamento para determinado dia.
Dicas: Escolha o mês que desejar, ou considere 30 dias. Você pode definir como critério de saída do programa a digitação do dia zero. Em JS, um array não inicializado possui undefined em todas as posições. */
const prompt = require("prompt-sync")();

let compromisso = [];
compromisso[0] = "estudo";
compromisso[1] = "estudo";
compromisso[2] = "estudo";
compromisso[3] = "estudo";
compromisso[4] = "estudo";
compromisso[5] = "estudo";
compromisso[6] = "estudo";

var perg = prompt("Que dia deseja consultar? ");
let dia = compromisso[perg];

console.log(`No dia ${perg} você tem já tem o seguinte compromisso: ${dia}. `);
console.log(compromisso.length);

















