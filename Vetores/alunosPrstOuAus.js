/* com base nos vetores de alunos e presença, exibir: 
1) quantidade de alunos;
2) qual número do aluno "rodrigo";
3) o total de presentes;
4) o nome dos ausentes;
*/

var prompt = require("prompt-sync")();

var alunos = [];
alunos[0] = "Bob"
alunos[1] = "Andre ";
alunos[2] = "Jão";
alunos[3] = "Angelita";
alunos[4] = "Joao";
alunos[5] = "Bruno";
alunos[6] = "Rodrigo";
alunos[7] = "Pin";

var presente = [];
presente[0] = true;
presente[1] = true;
presente[2] = false;
presente[3] = true;
presente[4] = false;
presente[5] = true;
presente[6] = false;
presente[7] = true;

var alunoPr = 0;
var alunoAusente = 0;

console.log("===============================================");
 for (var x = 0; x < 8; x++) {
     if (presente[x] == true) {
         console.log("aluno ", alunos[x], "presente.\n");
         alunoPr++      
    }
}

var totpr = alunoPr;
console.log("total de presentes: ", totpr);

console.log("===============================================");

for (var y = 0; y < 8; y++) {
    if (presente[y] == false) {
        console.log("aluno", alunos[y], "ausente. \n");
        alunoAusente++        
    }
}

var totAusente = alunoAusente;
console.log("Total de ausentes: ",totAusente);
console.log("===============================================");

var nome = prompt("Qual é o seu nome? ");

console.log("Quantidade de alunos: ",alunos.length);

console.log("===============================================");

for (var i = 0; i < 8; i++)
    if(alunos[i] == "Rodrigo") {
    console.log("você está na posição ",[i]);
}
console.log("===============================================");

var ausentes = []; //array

