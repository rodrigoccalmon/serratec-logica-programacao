/* Criar um Alerta de estoque para que quando algum item estiver abaixo de algum limite proposto, vai ficar retornando mensagem de alerta e caso o produto não esteja nesse limite ficaremos com mensagem de quantidade suficiente, será importante ao final da mensagem conter a quantidade de produtos ainda restante, os produtos são retirados do estoque 1 vez por dia.
+INSTRUÇÕES+
A Cada produto perguntar (Quantidade total de compras do (O NOME DO PRODUTO): (SUA QUANTIDADE))
Perguntar abaixo ('Dia Da Compra: ')
Quando Algum dos itens Estiver Abaixo de 7 UNIDADES Vai Receber Uma Mensagem ('Lembrete Comprar Produto e (O NOME DO PRODUTO)').
Caso não tenha atingido esse número retorna ('Quantidade Suficiente')
Se Caso tenha comprado produto demais para o mês irá retornar um valor negativo e sua mensagem vai ser (('LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO'))
A Cada dia que for retirado uma unidade irá retornar ('No' NumeroDoDia 'º Dia após nossa compra teremos,' X 'Unidades de: ' E o Nome do produto)
LISTA PRODUTOS NO ESTOQUE QUE VOCÊ PODE UTILIZAR:
Amido 
Farinha */

const prompt = require("prompt-sync")()
console.log("==================================");
console.log("CONTROLE DE ESTOQUE");
console.log("==================================")
var produto1 = prompt("Digite o produto que quer consultar no seu estoque: ")
var b = prompt("Digite o limite do seu estoque: ");
var a = prompt("Digite a quantidade que irá armazenar no estoque: ")
var estoqueprod1 = parseInt(b);
var totprod1 = parseInt(a);
var dif = estoqueprod1 - totprod1;

console.log("Você pode adicionar mais",dif,"KG de",produto1);








/* const prompt = require("prompt-sync")()

//ENTRADAs
//ENTRADA PRODUTO 1
var produto1 = 'Amido';
var Amido = prompt(`Quantidade total de compras do ${produto1}: `);
var Amido_UNID = Amido;

var dia_produto1 = prompt('Dia Da Compra: ');

//PROCESSAMENTO PARA O AMIDO
do{
    Amido_UNID--
        console.log('No ',dia_produto1--,'º Dia após nossa compra teremos,', Amido_UNID,'Unidades de:', produto1);
        
        if(Amido_UNID >= 1 && Amido_UNID <= 7){
            console.log('Lembrete Comprar Produto', produto1);
        
        }
        else{
            console.log('Quantidade Suficiente');
            if(dia_produto1 <= 0){
                console.log('**LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO**');
            }
        }     
}while(Amido_UNID >= 1);
console.log('!==========!');

//ENTRADA PRODUTO 2
var produto2 = 'Farinha'
var Farinha = prompt(`Quantidade total de compras do ${produto2}: `);
var Farinha_UNID = Farinha
var dia_produto2 = prompt('Dia Da Compra: ');

//PROCESSAMENTO PARA A FARINHA
do{
    Farinha_UNID--
        console.log('No ',dia_produto2--,'º Dia após nossa compra teremos,', Farinha_UNID,'Unidades de:', produto2);
        

        if(Farinha_UNID >= 1 && Farinha_UNID <= 7){
            console.log('Lembrete Comprar Produto', produto2);
        
        }
        else{
            console.log('Quantidade Suficiente');
            if(dia_produto2 <= 0){
                console.log('**LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO**');
            }
        }     
}while(Farinha_UNID >= 1)
console.log('!==========!')
*/