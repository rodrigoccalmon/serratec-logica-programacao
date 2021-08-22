/* O restaurante Zépa conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida. O cardápio conta com hambúrguer vegetariano, batata frita com queijo e refrigerante (respectivamente nos valores R$35, R$15 e R$15). */

var prompt = require("prompt-sync")();

console.log("======================================");
console.log("BEM VINDO AO ZEPA VEGANO!");
console.log("======================================");

const veg = 35;
const batata = 15;
const refri = 15;

var a = prompt("[1] Hamburguer vegetariano: R$ 35,00. Adicionar na sacola? [S/N] ");
var b = prompt("[2] Batata frita com queijo: R$ 15,00. Adicionar na sacola? [S/N] ");
var c = prompt("[3] Refrigerante: R$ 15,00. Adicionar na sacola? [S/N] ");

if (a == 'S' && b == 'S' && c == 'S') {
    console.log("Total: R$65.00 ");
}


