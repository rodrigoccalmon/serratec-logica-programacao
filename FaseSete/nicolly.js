/* sapato da nicolly */
var prompt = require("prompt-sync")();

var sapato = [];

sapato[0] = "Sandalia"; 
sapato[1] = "Mocacim"; 
sapato[2] = "Bota"; 
sapato[3] = "Chuteira"; 
sapato[4] = "Rasteirinha"; 
sapato[5] = "Sapatilha"; 
sapato[6] = "Tamanco";
sapato[7] = "Kichute";  
sapato[8] = "Tenis";
sapato[9] = "Havaianas";

var pesquisa = "Sapatilha";
var encontrei = -1;

for (var i = 0; i < sapato.length; i++){
    if (sapato[i] == pesquisa) {
        encontrei = i;
    }
}


