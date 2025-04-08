//Ex02_06.js - Ler dois números inteiros e informar se estes são iguais ou diferentes.
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("DIgite um numero"))
let numero2 = Number(prompt("DIgite outro numero"))

if(numero1 == numero2){
    console.log("Os numeros são iguais");
}
else{
    console.log("Os numeros são diferentes"); 
}