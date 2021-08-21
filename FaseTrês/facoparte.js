/* O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão. */

var prompt = require("prompt-sync")();
const idadetere = 130;
console.log("=============================================");
console.log("TERESÓPOLIS");
var idadeprompt = prompt("Qual é a sua idade? ");
var idadeUsuario = parseInt(idadeprompt);
var passado = idadetere - idadeUsuario;
console.log("=============================================");
// console.log(idadeUsuario);
// console.log(passado);
console.log("Teresópolis tem 130 anos. Desses,",passado,"foram antes de mim. Mas nos últimos",idadeUsuario,"ela conta comigo! ")





