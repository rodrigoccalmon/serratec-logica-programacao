const prompt = require("prompt-sync")();

//entradas

var cor = prompt("Qual a cor do indicador? ");

//processamento

if(cor == "vermelho"){
   console.log("completamente ocupado");
}
else 
    if(cor == "amarelo") {    
    console.log("Atenção a capacidade");
}
else 
    if(cor == "laranja") {
    console.log("Feminino ocupado, masculino livre");
}
else {
    console.log("Sanitário liberado");
}
//extenão que marca com cores o if e o respectivo else. 