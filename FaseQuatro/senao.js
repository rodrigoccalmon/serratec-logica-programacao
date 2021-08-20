/* seletor if trabalha: if verdadeiro uma instrução é executada, if é falso nada vai acontecer. 

a forma de extensão do if para que ele se comporte de uma maneira diferente. usamos o else para caso o valor seja falso. 

if (true){
    instrução.....;
}
else {
    instrução.... nao precisa colocar condição no else, pois ele só é acionado quando o resultado de if for false.
}
*/

const limite = 8
var qtde = 4;

var liberada = (qtde < limite);
var proximo = (qtde == 7);

if(liberada)
    if(proximo){
        console.log("Não deixe entrar se estiver acompanhado. ");
    }
    else {
        console.log("Entrada liberada! ");
    }
    else {
        console.log("Aguarde um pouco! "); 
    }

//e se quero mais instruções? usar o bloco de comandos {}
